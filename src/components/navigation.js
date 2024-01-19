
const btn1Handler = () => {
    console.log("hello")
}
const Button1 = () => <div style={myComponentStyles.container} onClick={btn1Handler}>btn1</div>


const Navigation = () => {


    return (
        <Button1 />
    )
}

const myComponentStyles = {
    container:{
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px',
    },
    btnActive: {
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px',
    },
    btnInactive: {
        color: 'black',
        fontSize: '16px',
    },
  };

export default Navigation