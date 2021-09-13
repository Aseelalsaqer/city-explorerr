import React from 'react' ;
 

class movies extends React.Component {
    
    render(){
        return(
            <>
            <p>Title={this.props.moviesArray.title}</p>
            <p>Over View={this.props.moviesArray.overview}</p>
            <p>Avavrge Votes={this.props.moviesArray.avaregVotes}</p>
            <p>Total Votes={this.props.moviesArray.totalVotes}</p>
            <p>Image URL={this.props.moviesArray.imageUrl}</p>
            <img alt={this.props.moviesArray.title} src={this.props.moviesArray.imageUrl} />
            <p>Popularity={this.props.moviesArray.popularity}</p>
            <p>Released On = {this.props.moviesArray.released_on}</p>
           
            </>
        );
    }
}
export default movies;