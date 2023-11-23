import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { addCoin, removeCoin } from './actions'
import SelectDropdown from 'react-native-select-dropdown'
const cryptoCoins = ["Bitcoin", "Ethereum", "Tether", "BNB","XRP","USDC","Solana","Cardano"]
import { connect } from 'react-redux'

const initialState = {
    amount: '',
    selectedCoin: 'Bitcoin'
}


class Crypto extends React.Component {
    state = initialState

    updateInput = (key, value) => {
        this.setState({
            ...this.state,
            [key]: value
        })
    }

    addCoin = () => {
        this.props.dispatchAddCoin(this.state)
        this.setState(initialState)
    }

    removeCoin = (coin) => {
        this.props.dispatchRemoveCoin(coin)
    }

    render() {
        const { coins } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Crypto Shop</Text>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.coinsContainer}
                >
                    {
                        coins.map((coin, index) => (
                            <View style={styles.crypto} key={index}>
                                <Text style={styles.amount}>{coin.amount}</Text>
                                <Text style={styles.coin}>{coin.selectedCoin}</Text>
                                <Text style={styles.remove} onPress={() => this.removeCoin(coin)}>
                                    Remove
                                </Text>
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={this.state.amount}
                            onChangeText={value => this.updateInput('amount', value)}
                            style={styles.input}
                            placeholder='Coin amount'
                        />
                        <SelectDropdown
                            style={styles.input}
                            data={cryptoCoins}
                            defaultValue={this.state.selectedCoin}
                            onSelect={(selectedItem) => {
                                this.updateInput('selectedCoin', selectedItem)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </View>
                    <TouchableOpacity onPress={this.addCoin}>
                        <View style={styles.addButtonContainer}>
                            <Text style={styles.addButton}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderTopColor: '#ededed',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 120
    },
    inputWrapper: {
        flex: 1,
    },
    select1: {
        borderStyle:"solid",
        borderColor:"black",
        borderWidth:"1px",
    },
    input: {
        height: 44,
        padding: 7,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        marginBottom: 5
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28
    },
    addButtonContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#ededed',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    container: {
        flex: 1
    },
    coinsContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        flex: 1
    },
    title: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    crypto: {
        padding: 20
    },
    amount: {
        fontSize: 18
    },
    coin: {
        fontSize: 14
    },
    remove: {
        color:'red'
    }
})

const mapStateToProps = (state) => ({
    coins: state.cryptoReducer.coins
})

const mapDispatchToProps = {
    dispatchAddCoin: (coin) => addCoin(coin),
    dispatchRemoveCoin: (coin) => removeCoin(coin)
}

export default connect(mapStateToProps, mapDispatchToProps)(Crypto)
