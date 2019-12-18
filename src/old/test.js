import React, { Component } from 'react';
// Importing the varable requires the |export default variable;|
import cavys from './datafile/cavys.js';


let showText = {
    display: 'block'
}
let hideText = {
    display: 'none'
}
// you could have name id Zoo instead of LoadData
/*const LoadData = ({animals}) => {
    return (
        <div>
            {animals.map(animal =>
                <Data key={animal.id} name={animal.name} id={animal.id} />
                )}
        </div>
        );
}*/
// or you can use the above code in a Class instead of a function component
// this is how you provide default value in case there is an empty data
//let Data = ({ id='0', name='No name provided', freeBookmark }) => {
let Data = ({ id, name, freeBookmark }) => {
    return (
        <div style={{ color: 'red' }}>
            <h1>This is a list of Cavys - Freepet {freeBookmark ? 'yes' : 'no!'}</h1>
            <div>{name}</div>
            <div>
                <ul>
                    <li>Cavys id: {id}</li>
                    <li>Cavys Name: {name}</li>
                </ul>
            </div>
        </div>
        );
}
// you do not have to use the return statment, it can be return directly like below
const Hiring = () => <div><h1>Gradi is Hiring</h1></div>
const NotHiring = () => <div><h1>Sorry! Gradi is not hiring right now</h1></div>
class LoadData extends Component{

    // this is a default assign values so that our application does not break in case we have an empty data list
    static defaultProps = {
        animals: [
            {'name' : 'Clochard','id' : '000'}
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            freeBookmark: true,
            hiring: true
        }
        // we have to bind our method or link then together to use the |this| key
        //this.toggle = this.toggle.bind(this);
    }
    toggle = () => {
        //this.setState({ this is for the long version without the prevState
        this.setState(prevState => ({
            // Setting the state of |open| in the constuctor to its opposite thus |!this.state.open| not |close|
            // we want to set the opposite because if it opens it going to be the opposite and same for if its closed!
            //open: !this.state.open | this is the long version below we use prevState, to set the previous state
            open: !prevState.open
        }));
    }

    render() {
        //const animals = this.props.animals ,or, const { animals } = this.props
        const { animals } = this.props
        return (

             //onClick={this.toggleText(index + 1)}*/
            <div style={{ color: 'red' }}>
                <h1>{this.state.hiring ? <Hiring /> : <NotHiring /> }</h1>
                <h1>The Zoo is {this.state.open ? 'Open by Gradi' : 'Close by Gradi'}</h1>
                <button onClick={this.toggle} >Open or Close the Z</button>
                {animals.map((animal) =>
                <Data
                        key={animal.id}
                        name={animal.name}
                        id={animal.id}
                        freeBookmark={this.state.freeBookmark}
                    />

                )}
        </div>      
        ); 
    }
   }

// Pass a variable style with direct call style={myStyle} this is an object!
// Pass a property style with direct call style={{color:this.props.color}} just like style={{color:blue}}
// Pass a combination of property and variable/object with a direct call style={{color:this.props.color}, myStyle} nope! didn't work
let styleDiv = {
    color: 'black',
    backgroundColor: 'lightblue',
    borderBottom: '5px solid lightgray',
    textAlign: 'left'
}

// styling object
let bold = {
    fontWeight: 'bold'
}
// property object
let Elephant = {
    name: 'Masa Kunta',
    color: 'Strong Gray',
    nationality: 'Congolese',
    gender: 'Male',
    size: 12,
    weight: 30,

}
//step 1: let create an array!
//step 2: call the array in a the view as a |{props}| or |{array}| <View key={props} /> or <View key={array} /> 
//step 3: creat a composed component and pass the |props| or |key| const component = ({key|props}) => {}
let animalList = [
    { "id": "1", "name":"dog", "color":"black, white", "type":"domesticated"},
    { "id": "2", "name":"cat", "color":"red,blue, white", "type":"domesticated"},
    { "id": "3", "name":"wolf", "color":"gray", "type":"undomesticated"},
    { "id": "4", "name":"hyene", "color":"brown", "type":"domesticated"}
]

// Composed component have the advatage of taking properties
// this is a component, we do not need | this.props... | nor | this.... | those properties have already been declared
const Animal = ({ animalName, animalType, animalOrigin, id}) => {
    return (
        <div>
        <section style={styleDiv}>
            <h3>Id: {id} : from inner-file</h3>
            <h4>Animal Name : <span style={{ textDecoration:'underline' }}>{animalName}</span></h4>
            <h4>Type: {animalType}</h4>
            <h4>Origin: {animalOrigin}</h4>
            </section>
            </div>
        );
}
const AnimalK = ({ id, name, color, type  }) => {
    return (
        <section style={styleDiv}>
            <h3>Id: {id} : from outer-file</h3>
            <h4>Animal Name : <span style={{ textDecoration: 'underline' }}>{name}</span></h4>
            <h4>Type: {color}</h4>
            <h4>Origin: {type}</h4>
        </section>
        );
}
// Aside from classes there are composed components which we store in a variable
// The Zoo will be passed the property for the outter file which is our |animalList| under key |animal|
// Refer to the render component to set the properties
const Zoo = ({ animals }) => {
    // Apart from a class a composed component or variable component does not have a render method
    // Note: method are called inside Components
    return (
        <section style={styleDiv}>
            <h1 style={bold}>Welcome to KayambaZoo</h1>
            <h2>Here the Animal List: </h2>
            <Animal
                id={1}
                animalName='Lion'
                animalType='Carnivor'
                animalOrigin='Congo'
            />
            <Animal
                id={2}
                animalName='Elephant'
                animalType='Herbivor'
                animalOrigin='Congo North'
            />
            <div>
                {animals.map(
                    animal => <AnimalK key={animal.id} id={animal.id} name={animal.name} type={animal.type} color={animal.color} />
                )}
            </div>
        </section>
        );
}

class Test extends Component {
    // the getVolume method has a property of volume
    getVolume = (volume) => {
        return volume * 100 + ' Cubic'
    }
    // the calcMass has two properties size and weight which are equal to the volume
    // This is a method using arrow notation, so we don't call it with `this.props...` but with `this...(props)`
    calcMass = (size, weight) => {
        return this.getVolume(size * weight)
    }
    render() {
        // Initialize you variable here
        // the use of this.props. is repetitive, so let fix that !
        const { color, elephantColor, nationality, gender, size, weight } = this.props
        return (
            <div style={styleDiv}>
                <h1>Elephant Profile</h1>
                <ul title={this.props.name}>
                    <li style={{ color: color }}>Name: <span style={bold}>{this.props.name}</span></li>
                    <li>Color: {elephantColor} </li>
                    <li>Nationality: {nationality}</li>
                    <li>Gender: {gender}</li>
                    <li>Size: {size} meters</li>
                    <li>Mass: {this.calcMass(size, weight)} meters</li>
                </ul>
            </div>
            );
    }
}

class TestView extends Component {
    render() {
        //{console.log(cavys)}
        return (
            <div>
                {/* 
                 Access the key (name, color, ...) in another method(class/funtion) using (this.props.name, ...)
                 Data from an object! this could also be js/json
                 since this is the display, the props have to be define here then passed on the method handler
                */}
                 {/*these are properties*/}
                <Test
                    name={Elephant.name}
                    color='green'
                    elephantColor={Elephant.color}
                    nationality={Elephant.nationality}
                    gender={Elephant.gender}
                    size={Elephant.size}
                    weight={Elephant.weight}
                />
                    {/*you can duplicate the method by calling it multiple times don't forget to wrap it*/}
                <Test
                    name='Mundombe'
                    elephantColor='blue'
                    color='blue'
                    nationality='Congolese'
                    gender='Male'
                    size={4+3}
                />
                <Test
                    name='MuZombo'
                    color='brown'
                />
                <Zoo animals={animalList} />
                <LoadData animals={cavys} />
            </div>
        );
    }
}


export default TestView;