import PropTypes from 'prop-types';

const App = () => {
  const  profiles = [
    { name : 'Taro', age: 10},
    { name : 'Hanako', age: 5},
    { name : "noName", age: 15}
  ]
  return (
    <>
    {profiles.map((profile, index) => {
      return <User name={profile.name} age={profile.age} key={index}/>
    })}
    </>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}! I am {props.age} years old! </div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
