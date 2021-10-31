import React from 'react';
import './PopularDestination.css';
import { Card, CardGroup, Container } from 'react-bootstrap';


const PopularDestination = () => {
    return (
        <div className="my-5">
            <Container>
                <div className="text-center">
                    <h1 className="my-2 headline-design text-center">Popular Destinations</h1>
                    <h4 className="my-3 fs-6 text-center">When we needed care for a loved one, we couldn’t find the right mix of expertise. <br /> That’s why our caregivers mean so much more to the people and organizations they serve.</h4>
                </div>
                <CardGroup className="my-4">
                    <Card className="mx-2 border-0 card-design">
                        <Card.Img variant="top" src="https://pictures.tripmasters.com/images/packages1/thailand/thailand-bangkok-lewatarun.jpg" />
                        <Card.Body>
                        <Card.Title className="title fs-3">Thailand</Card.Title>
                        <Card.Text>
                        What is it about Thailand that makes it a major tourist destination? It could be the world famous mouth-watering cuisine, ...
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="border-0 bg-dark text-light">
                        <small className="title fw-normal">Rating:
                        <i style={{marginLeft:"5px"}} class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                         </small>
                        </Card.Footer>
                    </Card>
                    <Card className="mx-2 border-0 card-design">
                        <Card.Img variant="top" src="https://i.pinimg.com/564x/a4/1b/d9/a41bd9bf0bb60a6644633184d89ce42b.jpg" />
                        <Card.Body>
                        <Card.Title className="title fs-3">Norway</Card.Title>
                        <Card.Text>
                        Nature is what makes Norway truly spectacular; from rugged mountains to deep fjords; from pitch black winters to light summers ...
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="border-0 bg-dark text-light">
                        <small className="title fw-normal">Rating:
                        <i style={{marginLeft:"5px"}} class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                         </small>
                        </Card.Footer>
                    </Card>
                    <Card className="mx-2 border-0 card-design">
                        <Card.Img variant="top" src="https://i.pinimg.com/564x/4b/c8/4d/4bc84da490398e6b8b77115d5c4c80f0.jpg" />
                        <Card.Body>
                        <Card.Title className="title fs-3">Iceland</Card.Title>
                        <Card.Text>
                        Iceland tours make you feel like you’ve reached a new planet altogether. With wonders like the Blue Lagoon and northern lights, it's amazing ...
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="border-0 bg-dark text-light">
                        <small className="title fw-normal">Rating: 
                        <i style={{marginLeft:"5px"}} class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                         </small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>  
        </div>
    );
};

export default PopularDestination;