import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, StatusBar, View, Text, TextInput, Alert, Keyboard } from 'react-native';

import { getCharactersMarvel } from './Service/Request'
import Styles from './Styles';
import Color from './Config/Color';
import Loading from './Components/Loading/Index'
import Lista from './Components/Lista/Index'
import RNNativeCountHeroesModule from './Components/NativeModule/CountHeroes'

const App = () => {

	const [load, setLoad] = useState(false)
	const [textSearch, setTextSearch] = useState('a')
	const [dataHerois, setDataHerois] = useState([])
	const [totalHerois, setTotalHerois] = useState('')

	useEffect(() => {
		StatusBar.setBackgroundColor(Color.yellow)
		StatusBar.setBarStyle("light-content")
		search()
	}, [])

	const search = async () => {
		try {
			if(textSearch.trim() != ''){
				Keyboard.dismiss()
				setLoad(true)
				let response = await getCharactersMarvel(textSearch);
				setTotalHerois(RNNativeCountHeroesModule.countHeroes(response.length))
				setDataHerois(response)
			}
		} catch (error) {
			Alert.alert("Não foi possivel executar a pesquisa");
			console.log(error)
		} finally{
			setLoad(false)
		}
	}

	return (
     	<SafeAreaView>
			<View style={Styles.container}>
				<View style={Styles.containerSearch}>
					{ !textSearch ? null :
						<View style={Styles.containerLabelSearch}>
							<Text style={Styles.textLabelSearch}>Procurando por:</Text>
						</View>
					}
					<TextInput placeholder='Procurar por Super Heróis da Marvel' style={Styles.inputSearch} value={textSearch} onChangeText={(text) => setTextSearch(text)} autoCapitalize='none'  />
					<TouchableOpacity style={Styles.buttonSearch} activeOpacity={0.8} onPress={search}>
						<Text style={Styles.textButtonSearch}>Procurar</Text>
					</TouchableOpacity>
				</View>
				<View style={Styles.containerResult}>
					<Text style={Styles.textResult}>{totalHerois}</Text>
				</View>
				{ load ? <Loading /> : <Lista data={dataHerois} load={load}/> }
			</View>
    	</SafeAreaView>
  	);
};

export default App;