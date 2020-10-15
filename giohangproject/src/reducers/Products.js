
var initState = [
    {
        id: 1,
        name: 'Sản phẩm 1',
        image:'https://i.pinimg.com/564x/f1/54/5d/f1545d9fcecd2c92ca1cbf944f4abe94.jpg',
        description: 'San pham tot',
        price: 100,
        inventory: 10,
        rating: 3,
    },
    {
        id: 2,
        name: 'Sản phẩm 2',
        image:'https://i.pinimg.com/564x/f1/54/5d/f1545d9fcecd2c92ca1cbf944f4abe94.jpg',
        description: 'San pham tot',
        price: 200,
        inventory: 10,
        rating: 4,
    },
    {
        id: 3,
        name: 'Sản phẩm 3',
        image:'https://i.pinimg.com/564x/f1/54/5d/f1545d9fcecd2c92ca1cbf944f4abe94.jpg',
        description: 'San pham tot',
        price: 300,
        inventory: 10,
        rating: 5,
    },
];

const myReducer = (state = initState,action)=>{
    switch(action.type){
        default:{
            return state;
        }
    }
}

export default myReducer;

