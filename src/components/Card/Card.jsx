import React from 'react';

import {
  Card as BootstrapCard,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
} from 'reactstrap';

const Card = (props) => (
  <BootstrapCard>
    <CardBody>
      <CardTitle>{props.title}</CardTitle>
      <CardSubtitle>{props.subtitle}</CardSubtitle>
      <CardText>{props.children}</CardText>
      <CardLink href={props.link}>{props.link}</CardLink>
    </CardBody>
  </BootstrapCard>
);

export default Card;
