import React from 'react';

function SplashScreen(props) {
    return (
        <SafeAreaView style={styles.container}>     
        <Image
        style={styles.image} 
        source={require('./assets/logo.png')} />
        <Text 
        style={styles.text}
        >No 1. Real Estate Company In Nigeria</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === 'andriod' ? StatusBar.currentHeight : 0,
    },
    image: {
      width: 300,
      height: 150,
      resizeMode: 'stretch',
    },
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    }
  });
  

export default SplashScreen;