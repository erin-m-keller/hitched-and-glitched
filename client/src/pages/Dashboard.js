import React, { useEffect, useState } from 'react';
import Auth from '../utils/auth';
import { Card, Empty, notification } from 'antd';
import { useApolloClient } from "@apollo/client";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_USER } from "../utils/queries";
import { REMOVE_INSPIRATION } from "../utils/mutations";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight, faBookmark as faBookmarkFilled, faHeart } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const headers = {
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`
    }
  },
  email = Auth.getProfile(),
  { loading, dataErr, data, refetch } = useQuery(GET_USER, {
    variables: { email },
    context: headers
  }),
  [removeInspiration, { error }] = useMutation(REMOVE_INSPIRATION),
  [userData, setUserData] = useState(null),
  apolloClient = useApolloClient(),
  cache = apolloClient.cache,
  [api, contextHolder] = notification.useNotification();

  console.log("email: ", email);

  useEffect(() => {
    refetch();
    console.log(JSON.stringify(data));
    if (data) {
      setUserData(data.getUser);
    }
  });
  const updateLocalStorage = (inspirationId) => {
    const savedInspirationIds = JSON.parse(localStorage.getItem('activeInspirationList'));
    if (!savedInspirationIds) return false;
    const updatedSavedInspirationIds = savedInspirationIds.filter((savedInspirationId) => savedInspirationId !== inspirationId);
    localStorage.setItem('activeInspirationList', JSON.stringify(updatedSavedInspirationIds));
    return true;
  };
  const removeInspirationFromList = async (inspirationId) => {
    const token = Auth.getToken();
    if (!token) return false; 
    try {
      await removeInspiration({ variables: { inspirationId }, context: headers }); 
      const updatedUserData = {
        ...userData,
        savedInspirations: userData.savedInspirations.filter((inspiration) => inspiration.id !== inspirationId), 
      };
      const cacheKey = cache.identify(userData);
      cache.evict({ id: cacheKey }); 
      cache.writeQuery({ 
        query: GET_USER, 
        variables: { email }, 
        data: { 
          getUser: { ...updatedUserData } 
        } 
      }); 
      setUserData(updatedUserData);
      updateLocalStorage(inspirationId);
      openNotification('topRight');
    } catch (err) {
      console.error("Try/Catch Error: " + err);
      console.error("Mutation error: " + error);
    }
  };
  const openNotification = (placement) => {
    api.info({
      message: "Inspiration removed!",
      description: "Click the 'Inspiration' link in the menu to search for more inspiration.",
      placement,
    });
  };
  if (loading && !userData) {
    return <div>Loading...</div>;
  }
  if (dataErr) {
    return <div>Error: {dataErr.message}</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }


return (
  <>
    {Auth.loggedIn() ? (
      <>
        <div className="hero">
          <h1 className="text-gradient">Dashboard</h1>
        </div>
        <div className="container">
          <h1>Saved Inspiration</h1>
          {contextHolder}
          {userData && userData.savedInspirations && userData.savedInspirations.length > 0 ? (
            <>
              <h2>You have {userData.savedInspirations.length} saved {userData.savedInspirations.length === 1 ? "inspiration" : "inspirations"}:</h2>
              <div className="inspiration-container">
                {userData.savedInspirations.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <Card
                        hoverable
                        id={item.id}
                        className="inspiration-item"
                        actions={[<p className="salmon"><a href={item.raw} target="_blank">View larger. <FontAwesomeIcon icon={faSquareUpRight} /></a></p>]}
                        style={{ width: 240 }}>
                        <Card type="inner"
                          title={<small><FontAwesomeIcon icon={faHeart} />&nbsp;&nbsp;&nbsp;{item.likes === 1 ? `${item.likes} Like` : `${item.likes} Likes`}</small>}
                          extra={
                            <small onClick={() => removeInspirationFromList(item.id)}>
                              <FontAwesomeIcon
                                icon={faBookmarkFilled}
                                aria-label="Remove Inspiration"
                                className="bookmark" />&nbsp;&nbsp;&nbsp;<strong>Remove</strong>
                            </small>
                          } />
                          <div className="ant-card-cover inspiration-cover" style={{ backgroundImage: `url(${item.backgroundImage})` }}></div>
                          <div className="body">
                          <p>{item.alt_description}</p>
                        </div>
                      </Card>
                    </React.Fragment>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h3>You have no saved inspiration!</h3>
              <Empty description="No inspiration found." />
            </>
          )}
        </div>
      </>
    ) : (
      <div fluid="true" className='text-light bg-dark p-5'>
        <div className='container p-4'>
          <h1>You must be logged in to view this page.</h1>
        </div>
      </div>
    )}
  </>
)};

export default Dashboard;
