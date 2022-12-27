interface IHelloPropTypes {
  user?: any;
}

function Hello({ user }: IHelloPropTypes) {
  return user?.name ? <div>Hello {user.name}</div> : <button>로그인</button>;
}

export default Hello;
