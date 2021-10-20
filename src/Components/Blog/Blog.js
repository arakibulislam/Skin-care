import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardGroup, Container, Nav } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div style={{ backgroundImage: `url("https://cosmedics-s3-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/05/18155715/Cosmedics-Welcome-scaled.jpg")` }}
                className=" banner">
                <Container>
                    <div className="row">
                        <div className='col-lg-6 lg-12 text-start text-light py-5 '>
                            <div className='banner-text my-5 p-4'>
                                <h1>
                                    Blog
                                </h1>
                                <h4 className='my-3'>
                                    Our latest news
                                </h4>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Nav className='container ps-4 my-5 fs-4 fw-light '
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link className=' button-blue text-light rounded-3'  href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-dark' >Cosmatic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-dark' > Medical</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-dark' > Press</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-dark' >  Blog</Nav.Link>
                </Nav.Item>
                
            </Nav>


            <Container>
                <CardGroup className='row mt-4 mb-5'>
                    {
                        blogs.map(blog => <div key={blog.id} className='col-lg-4 col-12  mb-5'>
                            <Card className='text-start border-0 blog-card shadow h-100 position-relative mx-auto'>
                                <div className='blog-img'>
                                    <Card.Img className='img' variant="top" src={blog.img} />
                                </div>
                                <Card.Body>
                                    <Card.Title className='blog-titel'>{blog.titel}</Card.Title>
                                    <Card.Text>
                                        <i className="fas fa-user-edit me-2 text-dark"></i>  {blog.author}
                                    </Card.Text>
                                    <Card.Text>
                                        <i className="fas fa-calendar me-2"></i>  {blog.date}
                                    </Card.Text>
                                </Card.Body>

                                <p className="blue ps-3 text-decoration-underline pointer">Read More</p>
                                <Button className='position-absolute button-blue'>{blog.category}</Button>
                            </Card>
                        </div>)
                    }
                            <Button className='mb-5 p-3 button-blue w-25 mx-auto'>Load More</Button>
                            
                </CardGroup>
            </Container>
        </div>
    );
};

export default Blog;