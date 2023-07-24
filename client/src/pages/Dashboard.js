import alter from "../assets/images/alter.jpg";
import dDay from "../assets/images/dDay.jpg";
import food from "../assets/images/food.jpg";
import lightBulb from "../assets/images/lightBulb.jpg";
import piggyBank from "../assets/images/piggyBank.jpg";
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

  useEffect(() => {
    refetch();
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
  const goToInspire = () => {
    // go to page function
    console.log('go to inspire');
  };

  const goToCountdown = () => {
    // go to page function
    console.log('go to countdown');
  };

  const goToBudget = () => {
    // go to page function
    console.log('go to budget');
  };

  const goToVender = () => {
    // go to page function
    console.log('go to vender');
  };

  const goToVenue = () => {
    // go to page function
    console.log('go to venue');
  };

  return (
    <div className="mainDash">
      <div className="flex-container">
        <div className="dashDirect-light">
          <a href="/lightBulb">
            <img src="../lightBulb.jpg" alt="Light" />
          </a>
          <button className="light" onClick={goToInspire}>
            <img src={lightBulb}alt="Light" />
          </button>
        </div>
        <div className="dashDirect-count">
          <a href="/dDay">
            <img src="../dDay.jpg" alt="Count" />
          </a>
          <button className="dooms" onClick={goToCountdown}>
            <img src="../dDay.jpg" alt="DoomsDay" />
          </button>
        </div>
        <div className="dashDirect-funds">
          <a href="/piggyBank">
            <img src="../piggyBank.jpg" alt="Funds" />
          </a>
          <button className="piggy" onClick={goToBudget}>
            <img src="../piggyBank.jpg" alt="Budget" />
          </button>
        </div>
        <div className="dashDirect-food">
          <a href="/food">
            <img src="../food.jpg" alt="Food" />
          </a>
          <button className="food" onClick={goToVender}>
            <img src="../food.jpg" alt="Food" />
          </button>
        </div>
        <div className="dashDirect-venue">
          <a href="/alter">
            <img src="../alter.jpg" alt="Venue" />
          </a>
          <button className="alter" onClick={goToVenue}>
            <img src="../alter.jpg" alt="Alter" />
          </button>
---------------------------------------------------------------------------------------------------------
<div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>

<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>

<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
<div class="particle">
	<div class="inner"></div>
</div>
        </div>
        <h1>The first s-s-step is always the hardest, there's no wrong p-p-p-lace to start!</h1>
      <img src="robot.png" width="200px" alt="Robot" />

      </div>
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
    </div>
  );
}

export default Dashboard;
