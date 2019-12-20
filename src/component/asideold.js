import React from 'react';
import { Link } from 'react-router-dom';
/* DATABASE */
import { databaseList, total } from '../Component/datalist.js';
/* CSS */
import styles from '../css/factopedia.module.css';
class Accordion extends React.Component {
    render() {
        const { title, expand, onClick, name, length } = this.props;
        const Fragment = React.Fragment;
        return (
            <Fragment>
                <div className={expand ? [styles.title, styles.is_expanded].join(" ") : styles.title} onClick={onClick}>
                    <span itemProp="about" >{title}</span>
                    <span itemProp="collectionSize" className={styles.total}> <small>{length.toLocaleString()}</small> </span>
                </div>
                <div  className={expand ? [styles.content, styles.is_expanded].join(" ") : styles.content} onClick={onClick}>
                    <ul>{name.slice(0, 20)}</ul>
                </div>
            </Fragment>           
    );
    
  }
}

// [step:1] This function is returning a <li> for each name data; the <ul> is in the last step |Class Accordion|
// It is call in the [step:2] Application Class <List /> and passed to the [step:3] Accordion Class as {name}
const List = ({ nameIn }) => <Link  to={`/animal-database/fact/${nameIn}`}><li itemProp="name">{nameIn}</li></Link>

class Application extends React.Component {  
  constructor (props) {
    super(props);
    this.state = {
      block1: false,
      block2: false,
      block3: false,
      block4: false,
      block5: false,
      block6: false,
      block7: false,
      block8: false,
      block9: false,
      block10: false,
      block11: false,
      block12: false,
      block13: false,
      block14: false,
      block15: false,
      block16: false,
      block17: false,
      block18: false,
      block19: false,
    };
  }
  
  toggle = (index) => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] });
  }

  toggleExpand = (expand = false) => () => {
    this.setState({
      block1: expand,
    });
  }
  
    render() {
      return (
          <div className={styles.container}>
              {/* this is counting the total number of animal in the DB*/}
              <h3>Factopedia {total}</h3>

              <button type="button" className={[styles.Button, styles.disabled].join(' ')} onClick={this.toggleExpand(true)} disabled="disabled">Expand All</button>
              <button type="button" className={styles.Button} onClick={this.toggleExpand()}>Collapse All</button>
              <div itemScope itemType="http://schema.org/CreativeWork" className={styles.accordion}>
                  
                      
                  {
                        databaseList.map((item, index) => (
                            <Accordion
                                key={item.title}
                                title={item.title}
                                type={item.type}
                                length={item.list.length}
                                name={
                                    item.list.map((itemIn) => (
                                
                                        <List
                                            key={itemIn.id}
                                            nameIn={itemIn.name}
                                        />
                                    ))
                                }
                                onClick={this.toggle(index + 1)}
                                expand={this.state[`block${index + 1}`]}
                            />                
                        ))
                    }
            </div>
        </div>
      );
  }
}

class Aside extends React.Component {

    render() {
        
        const Fragment = React.Fragment;
        return (
            <Fragment>               
                <aside className={styles.Aside}>                       
                    < Application />
                </aside>
            </Fragment>
        );
    }
}

export default Aside;

