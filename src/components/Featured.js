import React from "react";
import Heading from "./Heading";
import '../index.css'
import { Card, Col, Row} from 'antd';
const { Meta } = Card;



const Featured = (pops) => {
    return (
        <div>
            <section className="featured background">
                <div className="container">
                    <Heading title="Featured Property Types" subtitle="Find All Type Of Property" />

                </div>
            </section>
            <div className="featured"   >
                <Row gutter={10}>
                    <Col span={4}>
                        <Card 

                            cover={<img alt="buildings" src="https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80" />}
                        >

                            <Meta title="Chitaland Tower" description="surakarta" />
                            <h3 className="text">Rp. 2,840,000</h3>
                        </Card>
                    </Col>

                    <br />
                    <Col span={4}>


                        <Card
                            cover={<img alt="buildings" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />}
                        >
                            <Meta title="Borneo Paradiso" description="surakarta" />
                            <h3 className="text">Rp. 4,040,000</h3>
                        </Card>
                    </Col>

                    <br />

                    <Col span={4}>

                        <Card
                            cover={<img alt="buildings" src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />}
                        >
                            <Meta title="Tamansari Urbano" description="surakarta" />
                            <h3 className="text">Rp. 2,340,000</h3>
                        </Card>
                    </Col>
                </Row>
            </div>



        </div>
    )
}

export default Featured