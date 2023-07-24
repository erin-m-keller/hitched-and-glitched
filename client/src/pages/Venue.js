import React, { useState, useEffect } from 'react';
import { Input, Card, Button, CardColumns, Container, Jumbotron, Form, Col } from 'react-bootstrap';
// Import other necessary dependencies and components

const Venue = () => {
  const [searchedPlaces, setSearchedPlaces] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedPlacesIds, setSavedPlacesIds] = useState([]);

  // Add your other state variables and functions here (e.g., the useMutation function)

  // Function to handle form submission and search
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      // Implement your logic to fetch data from the API or local storage
      // For example, using searchGooglePlaces(searchInput) as mentioned in the original code

      // For demonstration purposes, let's assume you have data in the format below
      const response = {
        ok: true,
        data: [
          {
            id: 1,
            description: 'Venue 1 description',
            location: 'Venue 1 address',
            contactNumber: 'Venue 1 phone number',
            image: 'venue1.png',
          },
          // Add more data here
        ],
      };

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { data } = response;

      const placesData = data.map((place) => ({
        PlacesId: place.id,
        description: place.description,
        location: place.location,
        contactNumber: place.contactNumber,
        image: place.image,
      }));

      setSearchedPlaces(placesData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // Function to handle saving places to local storage or database using the useMutation function
  const handleSavePlaces = async (PlacesId) => {
    // Implement the logic to save the place to local storage or database
    // For demonstration purposes, let's assume you add the PlacesId to the savedPlacesIds state

    if (savedPlacesIds.includes(PlacesId)) {
      return; // Place is already saved
    }

    setSavedPlacesIds([...savedPlacesIds, PlacesId]);
  };

  // Load savedPlacesIds from local storage on component mount
  useEffect(() => {
    const savedIds = getSavedPlacesIds();
    if (savedIds) {
      setSavedPlacesIds(savedIds);
    }
  }, []);

  // Save updated savedPlacesIds to local storage when the state changes
  useEffect(() => {
    savePlacesIds(savedPlacesIds);
  }, [savedPlacesIds]);

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Places!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a Place'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedPlaces.length
            ? `Viewing ${searchedPlaces.length} results:`
            : 'Search for a Place to begin'}
        </h2>
        <CardColumns>
          {searchedPlaces.map((place) => {
            return (
              <Card key={place.PlacesId} border='dark'>
                {place.image ? (
                  <Card.Img src={place.image} alt={`The image for ${place.location}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{place.location}</Card.Title>
                  <p className='small'>Contact: {place.contactNumber}</p>
                  <Card.Text>{place.description}</Card.Text>
                  <Button
                    disabled={savedPlacesIds.includes(place.PlacesId)}
                    className='btn-block btn-info'
                    onClick={() => handleSavePlaces(place.PlacesId)}
                  >
                    {savedPlacesIds.includes(place.PlacesId)
                      ? 'This Place has already been saved!'
                      : 'Save this Place!'}
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Venue;

