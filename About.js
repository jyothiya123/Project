import React from 'react';

const App = () => {
    return (
        <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f8f9fa" }}>
            {/* Header Section */}
            <header style={{
                backgroundColor: "#34495e",
                padding: "40px 20px",
                color: "white",
                textAlign: "center"
            }}>
                <h1 style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
                }}>About Us</h1>
            </header>

            {/* Navigation Bar */}
            <nav style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#2c3e50",
                padding: "10px 20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}>
                <div className="logo" style={{ color: "white", fontSize: "24px" }}>
                    <h3>RecipeXpress</h3>
                </div>
            </nav>

            {/* About Section */}
            <section style={{
                padding: "60px 20px",
                textAlign: "center",
                backgroundColor: "white",
                animation: "fadeIn 1.5s ease-in-out"
            }}>
                <h1 style={{
                    fontSize: "42px",
                    marginBottom: "20px",
                    color: "#2c3e50"
                }}>Who We Are</h1>
                <p style={{
                    fontSize: "18px",
                    color: "#7f8c8d",
                    maxWidth: "900px",
                    margin: "0 auto",
                    lineHeight: 1.8
                }}>
                    At RecipeXpress, we're passionate about the joy of cooking and sharing amazing recipes. 
                    Our mission is to create a space where food enthusiasts can explore, create, and share unique recipes from all over the world. 
                    We believe that food has the power to bring people together, and our platform is dedicated to celebrating this culinary creativity.
                </p>
                <br /><br />
                <a href="#submit-recipe" style={{
                    marginTop: "20px",
                    padding: "12px 30px",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    transition: "background 0.3s ease"
                }}>Share Your Recipe</a>
            </section>

            {/* Mission & Values Section */}
            <section style={{
                padding: "50px 20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                gap: "30px",
                backgroundImage: "url('https://example.com/recipe-background.jpg')",
                backgroundSize: "cover",
                color: "#2c3e50"
            }}>
                <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "20px",
                    width: "320px",
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}>
                    <h3 style={{
                        fontSize: "24px",
                        marginBottom: "15px",
                        color: "#34495e"
                    }}>Our Mission</h3>
                    <p style={{
                        fontSize: "16px",
                        lineHeight: 1.6,
                        color: "#7f8c8d"
                    }}>To inspire creativity in the kitchen by providing a platform for sharing diverse, delicious recipes with a global community of food lovers.</p>
                </div>

                <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "20px",
                    width: "320px",
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}>
                    <h3 style={{
                        fontSize: "24px",
                        marginBottom: "15px",
                        color: "#34495e"
                    }}>Our Values</h3>
                    <p style={{
                        fontSize: "16px",
                        lineHeight: 1.6,
                        color: "#7f8c8d"
                    }}>We believe in community, culinary diversity, and the power of shared experiences. Every recipe submitted is a piece of someone's story, bringing us all closer together through food.</p>
                </div>

                <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "20px",
                    width: "320px",
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}>
                    <h3 style={{
                        fontSize: "24px",
                        marginBottom: "15px",
                        color: "#34495e"
                    }}>Why Join Us?</h3>
                    <p style={{
                        fontSize: "16px",
                        lineHeight: 1.6,
                        color: "#7f8c8d"
                    }}>RecipeXpress offers a welcoming community, a variety of exciting recipes, and the opportunity to showcase your culinary talents. Start sharing and exploring today!</p>
                </div>
            </section>

            {/* Team Section */}
            <section style={{
                padding: "60px 20px",
                textAlign: "center",
                backgroundColor: "#f0f0f0",
                animation: "fadeIn 1.5s ease-in-out"
            }}>
                <h2 style={{
                    fontSize: "38px",
                    marginBottom: "40px",
                    color: "#2c3e50"
                }}>Meet Our Team</h2>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                    flexWrap: "wrap"
                }}>
                    <div style={{
                        backgroundColor: "white",
                        padding: "20px",
                        width: "280px",
                        borderRadius: "15px",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease"
                    }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_G7wsBDto9rPotGwyn22CqwUBLJW4huD7D9zQZwmqQ-U6tLYWGtd0bBHJYJBOaj2I7s&usqp=CAU" alt="CEO" style={{
                            width: "100%",
                            borderRadius: "50%",
                            marginBottom: "20px",
                            transition: "transform 0.3s ease"
                        }} />
                        <h3 style={{
                            fontSize: "22px",
                            marginBottom: "10px",
                            color: "#34495e"
                        }}>JENNY</h3>
                        <p style={{ fontSize: "14px", color: "#7f8c8d" }}>Founder & CEO</p>
                    </div>

                    {/* Other Team Members */}
                </div>
            </section>

            {/* Footer Section */}
            <footer style={{
                backgroundColor: "#2c3e50",
                color: "white",
                textAlign: "center",
                padding: "20px",
                marginTop: "50px"
            }}>
                <p style={{ margin: 0, fontSize: "16px" }}>&copy; 2024 RecipeXpress. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;
