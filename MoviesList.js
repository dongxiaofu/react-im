import {PureComponent} from 'react';

export default class MoviesList extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            listData:[]
        }
        this.title = this.props.title
        this.url = this.props.url
        this.fetchData = this.fetchData.bind(this)
    }

    componentWillmount(){
        this.fetchData()
    }

    fetchData(){
        let url = this.url
        this.setState({
            listData: [{title:'a'},{title: 'b'}]
        })
        return
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    listData: res.subjects
                })
            })
    }

    renderTopicItem = ({item}) => {
        return ('hi')
    }

    render(){
        return (
            <View>
                <FlatList
                    data={this.state.listData}
                    keyExtractor={(item,index)=>index+""}
                    renderItem={this.renderTopicItem}
                    horizontal={true}
                    showHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}
