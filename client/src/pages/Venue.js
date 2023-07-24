import React, { useState, useEffect } from 'react';
import { Input, Card, Button, CardColumns, Container, Jumbotron, Form, Col } from 'react-bootstrap';


const Venue = () => {
  const [searchedPlaces, setSearchedPlaces] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedPlacesIds, setSavedPlacesIds] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
 
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

  const handleSavePlaces = async (PlacesId) => {

    if (savedPlacesIds.includes(PlacesId)) {
      return; 
    }

    setSavedPlacesIds([...savedPlacesIds, PlacesId]);
  };

  useEffect(() => {
    const savedIds = getSavedPlacesIds();
    if (savedIds) {
      setSavedPlacesIds(savedIds);
    }
  }, []);

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

