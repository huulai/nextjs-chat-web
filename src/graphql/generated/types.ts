// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  loggedOut: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  getNewTokens: NewTokensResponse;
  logout: LogoutResponse;
  signin: SignResponse;
  signup: SignResponse;
};


export type MutationLogoutArgs = {
  id: Scalars['Int'];
};


export type MutationSigninArgs = {
  signInInput: SignInInput;
};


export type MutationSignupArgs = {
  signUpInput: SignUpInput;
};

export type NewTokensResponse = {
  __typename?: 'NewTokensResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignResponse = {
  __typename?: 'SignResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: User;
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  hashedRefreshToken?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  hashedPassword: Scalars['Int'];
  hashedRefreshToken: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  hashedPassword?: Maybe<Scalars['String']>;
  hashedRefreshToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  hashedPassword?: Maybe<Scalars['String']>;
  hashedRefreshToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type LogoutMutationVariables = Exact<{
  input: Scalars['Int'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutResponse', loggedOut: boolean } };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', getNewTokens: { __typename?: 'NewTokensResponse', accessToken: string, refreshToken: string } };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signin: { __typename?: 'SignResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', username: string, email: string } } };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'SignResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', username: string, email: string } } };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };


export const LogoutDocument = gql`
    mutation Logout($input: Int!) {
  logout(id: $input) {
    loggedOut
  }
}
    `;
export const RefreshTokensDocument = gql`
    mutation refreshTokens {
  getNewTokens {
    accessToken
    refreshToken
  }
}
    `;
export const SignInDocument = gql`
    mutation SignIn($input: SignInInput!) {
  signin(signInInput: $input) {
    accessToken
    refreshToken
    user {
      username
      email
    }
  }
}
    `;
export const SignUpDocument = gql`
    mutation SignUp($input: SignUpInput!) {
  signup(signUpInput: $input) {
    accessToken
    refreshToken
    user {
      username
      email
    }
  }
}
    `;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const LogoutDocumentString = print(LogoutDocument);
const RefreshTokensDocumentString = print(RefreshTokensDocument);
const SignInDocumentString = print(SignInDocument);
const SignUpDocumentString = print(SignUpDocument);
const HelloDocumentString = print(HelloDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Logout(variables: LogoutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: LogoutMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<LogoutMutation>(LogoutDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Logout', 'mutation');
    },
    refreshTokens(variables?: RefreshTokensMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: RefreshTokensMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<RefreshTokensMutation>(RefreshTokensDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'refreshTokens', 'mutation');
    },
    SignIn(variables: SignInMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: SignInMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SignInMutation>(SignInDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SignIn', 'mutation');
    },
    SignUp(variables: SignUpMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: SignUpMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SignUpMutation>(SignUpDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SignUp', 'mutation');
    },
    Hello(variables?: HelloQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: HelloQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<HelloQuery>(HelloDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Hello', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;