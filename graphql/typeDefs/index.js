import { gql } from 'apollo-server-express';

import Disc from './disc';
import Bag from './bag';

const Query = gql`
  scalar JSON
  scalar DateTime

  directive @listArgs on FIELD_DEFINITION
  directive @defaultArgs on FIELD_DEFINITION

  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const Subscription = gql`
  type Subscription {
    _empty: String
  }
`;

const typeDefs = [Query, Mutation, Subscription, Disc, Bag];

export default typeDefs;
