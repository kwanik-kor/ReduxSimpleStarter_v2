import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Cotainer는 React에 의해서 만들어지는 State를 직접 접근하는 Component
class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                    onClick = {() => this.props.selectBook(book)}
                    key={book.title} 
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// State에서 books를 가져와서 이 State를 현재 'BookList'의 props로 매핑해주는 거임
const mapStateToProps = (state) => {
    // Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the BookList container
const mapDispatchToProps = (dispatch) => {
    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//React와 Redux는 연결고리가 없는데 아래의 'connect' function을 통해 두 개를 연결해 주는 것
// Promote BookList from a component to a container
//   - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps) (BookList);