import React, { useContext } from 'react';
import { Card, Row, Col } from 'antd';
import { DashboardContext } from '../context/DashboardContext';

const CardContent = () => {
    const { cardData } = useContext(DashboardContext);

    return (
        <Row gutter={16}>
            {cardData.map((card) => (
                <Col span={8} key={card.id}>
                    <Card
                        title={card.title}
                        bordered={false}
                        style={{ backgroundColor: card.color, minHeight: 150, border: 'none', cursor: 'pointer', marginTop: '1rem' }}
                    >
                        {card.description}
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default CardContent;
