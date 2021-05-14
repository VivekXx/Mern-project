import './App.css';
import React from 'react'
import {Header} from './components/Header'
import {Stats} from './components/Stats'
import {Table} from './components/Table'
import customers from './customer-data.js'
import {OrderTable} from './components/OrderTable'
import {OrderDistribution} from './components/OrderDistribution'
import Modal from 'react-modal'
Modal.setAppElement(document.getElementById('root'));
function App() {
  let subtitle
  const customersObj = (customers)
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [selectedName,setSelected] = React.useState('')
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }

  function closeModal(){
    setIsOpen(false);
  }
  const handleModalClick = (name) => {
    setSelected(name)
    setIsOpen(true)
  }
  return (
    <div className='container'>
      <Header />
      <Stats customers = {customersObj}/>
      <Table handleClick={handleModalClick} customers={customersObj} />
      <OrderDistribution customers={customersObj} />
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>
            {`${selectedName} - ${customers.filter(x=>x.Name==selectedName)[0].Phone}`}
          </h2>
          <h2>
            {`Order Count - ${customers.filter(x=>x.Name===selectedName).length} Total Amount - ${customers.filter(x=>x.Name===selectedName).map(x=>x.Amount).reduce((x,y)=>x+y)}`}
          </h2>
          <OrderTable orders={customersObj.filter(x=>x.Name===selectedName)}/>
          <button onClick={closeModal}>close</button>
          
        </Modal>
    </div>
  );
}

export default App;
