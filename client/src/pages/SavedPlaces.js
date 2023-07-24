import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { GET_ME } from '../utils/queries';
import { REMOVE_Places } from '../utils/mutations';
import Auth from '../utils/auth';
import { removePlacesId, savePlacesIds, getSavedPlacesIds } from '../utils/localStorage'; // Import the local storage functions

const SavedPlaces = () => {
  // ... Existing code ...

  const handleDeletePlaces = async (PlacesId) => {
    // ... Existing code ...

    try {
      const response = await removePlaces({
        variables: {
          PlacesId: PlacesId,
        },
      });

      if (!response) {
        throw new Error('Something went wrong!');
      }

      removePlacesId(PlacesId); // Update local storage by removing the deleted PlacesId
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved Places!</h1>
        </Container>
      </Jumbotron>
      <Container>
        {/* ... Existing code ... */}
      </Container>
    </>
  );
};


export default SavedPlaces;
