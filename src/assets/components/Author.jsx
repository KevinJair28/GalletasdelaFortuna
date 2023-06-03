import phrases from '../../phrases.json'


const Author = ({index}) => {
    return (
        <div className='author'>
            <i className="fa-solid fa-user-pen"></i>
            <p>{phrases[index].author}</p>
        </div>
    );
};

export default Author;