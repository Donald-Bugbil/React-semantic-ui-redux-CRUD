import  React  from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addNote } from '../Store/Actions';



class AddNoteForm extends React.Component {

    state ={
        header: '',
        meta: '',
        description: ''
    }

    onchangeHandler = (event) => {
        const{name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        
        const note ={
            header: this.state.header,
            meta: this.state.meta,
            description: this.state.description
        }
        
        this.props.addNote(note)
        
        this.setState({
            header: '',
            meta: '',
            description: ''
        })

    }

    render(){
        return (
            <Form size='small' onSubmit={this.onSubmitHandler}>
                <Form.Field>
                    <label>Header</label>
                    <input placeholder='Header' name='header' onChange={this.onchangeHandler}/>
                </Form.Field>
                <Form.Field>
                    <label>Meta</label>
                    <input placeholder='Meta' name='meta' onChange={this.onchangeHandler}/>
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextArea placeholder='Description' name='description' onChange={this.onchangeHandler}/>
                </Form.Field>
                <Button type= 'submit'>Add note</Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        cardDetails: state.cardDetails
    }
}

const mapDispatchToProps = {
    addNote: addNote 
}

export default connect(mapStateToProps,mapDispatchToProps)(AddNoteForm);