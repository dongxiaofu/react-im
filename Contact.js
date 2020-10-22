import React, {Component} from 'react';
import {
    PermissionsAndroid,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ActivityIndicator,
    Button, FlatList, TouchableHighlight, Dimensions,
} from 'react-native';
import Contacts from 'react-native-contacts';

import ListItem from './components/ListItem';
import Avatar from './components/Avatar';
import SearchBar from './components/SearchBar';
import {Actions} from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);

        this.state = {
            contacts: [],
            searchPlaceholder: 'Search',
            typeText: null,
            loading: true,
        };

        // if you want to read/write the contact note field on iOS, this method has to be called
        // WARNING: by enabling notes on iOS, a valid entitlement file containing the note entitlement as well as a separate
        //          permission has to be granted in order to release your app to the AppStore. Please check the README.md
        //          for further information.
        // Contacts.iosEnableNotesUsage(false);
    }

    async componentDidMount() {
        let contact = {
            recordID: '6b2237ee0df85980',
            users: [
                {
                    userId: 1,
                    username: '唐僧',
                    thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                },
                {
                    userId: 2,
                    username: '孙悟空',
                    thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                },
                {
                    userId: 3,
                    username: '猪八戒',
                    thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                },
                {
                    userId: 4,
                    username: '沙和尚',
                    thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                },
                {
                    userId: 5,
                    username: '如来',
                    thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                },
                {
                    userId: 6,
                    username: '二郎神',
                    thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                },
                {
                    userId: 7,
                    username: '嫦娥',
                    thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                },
                {
                    userId: 8,
                    username: '小白龙',
                    thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                },
                {
                    userId: 9,
                    username: '观音',
                    thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
                },
            ],
            backTitle: '',
            company: '',
            emailAddresses: [{
                label: 'work',
                email: 'carl-jung@example.com',
            }],
            familyName: 'Jung',
            givenName: 'Carl',
            middleName: '',
            jobTitle: '',
            phoneNumbers: [{
                label: 'mobile',
                number: '(555) 555-5555',
            }],
            hasThumbnail: true,
            thumbnailPath: 'http://img.08087.cc/uploads/20190819/11/1566184829-kXRzaQOrIV.jpg',
            postalAddresses: [{
                label: 'home',
                formattedAddress: '',
                street: '123 Fake Street',
                pobox: '',
                neighborhood: '',
                city: 'Sample City',
                region: 'CA',
                state: 'CA',
                postCode: '90210',
                country: 'USA',
            }],
            prefix: 'MR',
            suffix: '',
            department: '',
            birthday: {'year': 1988, 'month': 0, 'day': 1},
            imAddresses: [
                {username: '0123456789', service: 'ICQ'},
                {username: 'johndoe123', service: 'Facebook'},
            ],
        };

        let contacts = [contact, contact, contact, contact, contact, contact, contact, contact];
        this.setState({contacts, loading: true});


        // if (Platform.OS === "android") {
        //     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        //         title: "Contacts",
        //         message: "This app would like to view your contacts."
        //     }).then(() => {
        //         this.loadContacts();
        //     });
        // } else {
        //     this.loadContacts();
        // }
    }

    loadContacts() {
        Contacts.getAll()
            .then(contacts => {
                this.setState({contacts, loading: false});
            })
            .catch(e => {
                this.setState({loading: false});
            });

        Contacts.getCount().then(count => {
            this.setState({searchPlaceholder: `Search ${count} contacts`});
        });
    }

    search(text) {
        const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
        const emailAddressRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (text === '' || text === null) {
            this.loadContacts();
        } else if (phoneNumberRegex.test(text)) {
            Contacts.getContactsByPhoneNumber(text).then(contacts => {
                this.setState({contacts});
            });
        } else if (emailAddressRegex.test(text)) {
            Contacts.getContactsByEmailAddress(text).then(contacts => {
                this.setState({contacts});
            });
        } else {
            Contacts.getContactsMatchingString(text).then(contacts => {
                this.setState({contacts});
            });
        }
    }

    onPressContact(contact) {
        var text = this.state.typeText;
        this.setState({typeText: null});
        if (text === null || text === '') {
            Contacts.openExistingContact(contact);
        } else {
            var newPerson = {
                recordID: contact.recordID,
                phoneNumbers: [{label: 'mobile', number: text}],
            };
            Contacts.editExistingContact(newPerson).then(contact => {
                //contact updated
            });
        }
    }

    addNew() {
        Contacts.openContactForm({}).then(contact => {
            // Added new contact
            this.setState(({contacts}) => ({
                contacts: [contact, ...contacts],
                loading: false,
            }));
        });
    }

    _pressRow(userId) {
        Actions.userhome(userId);
    }

    renderListItem(contact) {
        const Item = ({item}) => (
            <TouchableHighlight onPress={() => this._pressRow(item.id)}>
                <View style={contacts.container}>
                    <Image
                        source={{uri: item.thumbnailPath}}
                        style={styles.thumbnail}
                    />
                    <Text style={styles.username}>{item.username}</Text>
                </View>
            </TouchableHighlight>
        );

        return (
            <View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.category}>Hello</Text>
                </View>
                <View style={listItemStyles.container}>
                    <FlatList
                        data={contact.users}
                        renderItem={Item}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={category.list}>
                    <Text style={category.listItem}>A</Text>
                    <Text style={category.listItem}>B</Text>
                    <Text style={category.listItem}>C</Text>
                    <Text style={category.listItem}>D</Text>
                    <Text style={category.listItem}>E</Text>
                    <Text style={category.listItem}>F</Text>
                    <Text style={category.listItem}>G</Text>
                    <Text style={category.listItem}>H</Text>
                    <Text style={category.listItem}>I</Text>
                    <Text style={category.listItem}>J</Text>
                    <Text style={category.listItem}>K</Text>
                    <Text style={category.listItem}>L</Text>
                    <Text style={category.listItem}>M</Text>
                    <Text style={category.listItem}>N</Text>
                    <Text style={category.listItem}>O</Text>
                    <Text style={category.listItem}>P</Text>
                    <Text style={category.listItem}>Q</Text>
                    <Text style={category.listItem}>R</Text>
                    <Text style={category.listItem}>S</Text>
                    <Text style={category.listItem}>T</Text>
                    <Text style={category.listItem}>U</Text>
                    <Text style={category.listItem}>V</Text>
                    <Text style={category.listItem}>W</Text>
                    <Text style={category.listItem}>X</Text>
                    <Text style={category.listItem}>Y</Text>
                    <Text style={category.listItem}>Z</Text>
                </View>
                <ScrollView style={{flex: 1}}>
                    {this.state.contacts.map(contact => {
                        return (
                            this.renderListItem(contact)
                        );
                    })}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    thumbnail: {
        width: 45,
        height: 40,
        borderRadius: 5,
    },
    categoryContainer: {
        backgroundColor: 'grey',
        width: width,
        marginTop: 15,
        // marginBottom: 15,
    },
    category: {
        height: 40,
        textAlignVertical: 'center',
        marginLeft: 10,
    },
    username:{
        flex:1,
        borderBottomWidth:0.5,
        marginLeft:10,
        textAlignVertical: 'center',
        fontSize:16,
    },
    spinner: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
    },
});

const contacts = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'row',
    },
});

const category = StyleSheet.create({
    list:{
        marginTop: 20,
        flexDirection: 'column',
        position:'absolute',
        right:10,
        zIndex:200,
    },
    listItem:{},
});

const listItemStyles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 40,
        // textAlignVertical:'center',
        // backgroundColor:'grey',
        marginLeft: 10,
    },
});


