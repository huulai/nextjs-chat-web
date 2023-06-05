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

export type Friend = {
  __typename?: 'Friend';
  id: Scalars['ID'];
  receiver: User;
  receiverId: Scalars['Int'];
  sender: User;
  senderId: Scalars['Int'];
  status: FriendStatus;
};

export type FriendActionResponse = {
  __typename?: 'FriendActionResponse';
  action: Scalars['String'];
  friend: Friend;
};

export type FriendAvgAggregate = {
  __typename?: 'FriendAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  receiverId?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

export type FriendCountAggregate = {
  __typename?: 'FriendCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  receiverId: Scalars['Int'];
  senderId: Scalars['Int'];
  status: Scalars['Int'];
};

export type FriendMaxAggregate = {
  __typename?: 'FriendMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  receiverId?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
  status?: Maybe<FriendStatus>;
};

export type FriendMinAggregate = {
  __typename?: 'FriendMinAggregate';
  id?: Maybe<Scalars['Int']>;
  receiverId?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
  status?: Maybe<FriendStatus>;
};

export enum FriendStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING'
}

export type FriendSumAggregate = {
  __typename?: 'FriendSumAggregate';
  id?: Maybe<Scalars['Int']>;
  receiverId?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  loggedOut: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFriend: Friend;
  deleteFriend: Friend;
  getNewTokens: SignResponse;
  logout: LogoutResponse;
  signin: SignResponse;
  signup: SignResponse;
  updateFriend: Friend;
  updateUserInfo: User;
};


export type MutationAddFriendArgs = {
  receiverEmail: Scalars['String'];
};


export type MutationDeleteFriendArgs = {
  id: Scalars['Int'];
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


export type MutationUpdateFriendArgs = {
  id: Scalars['Int'];
  status: Scalars['String'];
};


export type MutationUpdateUserInfoArgs = {
  updateUserInfoInput: UpdateUserInfoInput;
};

export type Query = {
  __typename?: 'Query';
  friends: Array<Friend>;
  hello: Scalars['String'];
  user: User;
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

export type Subscription = {
  __typename?: 'Subscription';
  friendAction: FriendActionResponse;
  test: Scalars['String'];
};

export type UpdateUserInfoInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Float']>;
  avatar?: InputMaybe<Scalars['String']>;
  interests?: InputMaybe<Array<Scalars['String']>>;
  occupation?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  aboutMe: Scalars['String'];
  age: Scalars['Int'];
  avatar: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  hashedRefreshToken?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  interests?: Maybe<Array<Scalars['String']>>;
  occupation: Scalars['String'];
  receiver?: Maybe<Friend>;
  sender?: Maybe<Friend>;
  sex: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  aboutMe: Scalars['Int'];
  age: Scalars['Int'];
  avatar: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  hashedPassword: Scalars['Int'];
  hashedRefreshToken: Scalars['Int'];
  id: Scalars['Int'];
  interests: Scalars['Int'];
  occupation: Scalars['Int'];
  sex: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  aboutMe?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  hashedPassword?: Maybe<Scalars['String']>;
  hashedRefreshToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  occupation?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  aboutMe?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  hashedPassword?: Maybe<Scalars['String']>;
  hashedRefreshToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  occupation?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  age?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type AddFriendMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type AddFriendMutation = { __typename?: 'Mutation', addFriend: { __typename?: 'Friend', id: string, status: FriendStatus, sender: { __typename?: 'User', id: string, email: string, username: string }, receiver: { __typename?: 'User', id: string, email: string, username: string } } };

export type DeleteFriendMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteFriendMutation = { __typename?: 'Mutation', deleteFriend: { __typename?: 'Friend', id: string } };

export type LogoutMutationVariables = Exact<{
  input: Scalars['Int'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutResponse', loggedOut: boolean } };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', getNewTokens: { __typename?: 'SignResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, username: string, email: string } } };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signin: { __typename?: 'SignResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, username: string, email: string } } };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'SignResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, username: string, email: string } } };

export type UpdateFriendMutationVariables = Exact<{
  id: Scalars['Int'];
  status: Scalars['String'];
}>;


export type UpdateFriendMutation = { __typename?: 'Mutation', updateFriend: { __typename?: 'Friend', id: string, status: FriendStatus, sender: { __typename?: 'User', id: string, email: string, username: string }, receiver: { __typename?: 'User', id: string, email: string, username: string } } };

export type UpdateUserInfoMutationVariables = Exact<{
  userInfo: UpdateUserInfoInput;
}>;


export type UpdateUserInfoMutation = { __typename?: 'Mutation', updateUserInfo: { __typename?: 'User', id: string, username: string, email: string, sex: string, interests?: Array<string> | null, aboutMe: string, age: number, occupation: string, avatar: string } };

export type FriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type FriendsQuery = { __typename?: 'Query', friends: Array<{ __typename?: 'Friend', id: string, status: FriendStatus, sender: { __typename?: 'User', id: string, email: string, username: string }, receiver: { __typename?: 'User', id: string, email: string, username: string } }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, email: string, sex: string, interests?: Array<string> | null, aboutMe: string, age: number, occupation: string, avatar: string } };


export const AddFriendDocument = gql`
    mutation AddFriend($email: String!) {
  addFriend(receiverEmail: $email) {
    id
    sender {
      id
      email
      username
    }
    receiver {
      id
      email
      username
    }
    status
  }
}
    `;
export const DeleteFriendDocument = gql`
    mutation DeleteFriend($id: Int!) {
  deleteFriend(id: $id) {
    id
  }
}
    `;
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
    user {
      id
      username
      email
    }
  }
}
    `;
export const SignInDocument = gql`
    mutation SignIn($input: SignInInput!) {
  signin(signInInput: $input) {
    accessToken
    refreshToken
    user {
      id
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
      id
      username
      email
    }
  }
}
    `;
export const UpdateFriendDocument = gql`
    mutation UpdateFriend($id: Int!, $status: String!) {
  updateFriend(id: $id, status: $status) {
    id
    sender {
      id
      email
      username
    }
    receiver {
      id
      email
      username
    }
    status
  }
}
    `;
export const UpdateUserInfoDocument = gql`
    mutation UpdateUserInfo($userInfo: UpdateUserInfoInput!) {
  updateUserInfo(updateUserInfoInput: $userInfo) {
    id
    username
    email
    sex
    interests
    aboutMe
    age
    occupation
    avatar
  }
}
    `;
export const FriendsDocument = gql`
    query Friends {
  friends {
    id
    status
    sender {
      id
      email
      username
    }
    receiver {
      id
      email
      username
    }
  }
}
    `;
export const UserDocument = gql`
    query User {
  user {
    id
    username
    email
    sex
    interests
    aboutMe
    age
    occupation
    avatar
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const AddFriendDocumentString = print(AddFriendDocument);
const DeleteFriendDocumentString = print(DeleteFriendDocument);
const LogoutDocumentString = print(LogoutDocument);
const RefreshTokensDocumentString = print(RefreshTokensDocument);
const SignInDocumentString = print(SignInDocument);
const SignUpDocumentString = print(SignUpDocument);
const UpdateFriendDocumentString = print(UpdateFriendDocument);
const UpdateUserInfoDocumentString = print(UpdateUserInfoDocument);
const FriendsDocumentString = print(FriendsDocument);
const UserDocumentString = print(UserDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AddFriend(variables: AddFriendMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AddFriendMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AddFriendMutation>(AddFriendDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddFriend', 'mutation');
    },
    DeleteFriend(variables: DeleteFriendMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteFriendMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteFriendMutation>(DeleteFriendDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteFriend', 'mutation');
    },
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
    UpdateFriend(variables: UpdateFriendMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateFriendMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateFriendMutation>(UpdateFriendDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateFriend', 'mutation');
    },
    UpdateUserInfo(variables: UpdateUserInfoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateUserInfoMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateUserInfoMutation>(UpdateUserInfoDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateUserInfo', 'mutation');
    },
    Friends(variables?: FriendsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: FriendsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<FriendsQuery>(FriendsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Friends', 'query');
    },
    User(variables?: UserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UserQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UserQuery>(UserDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'User', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;