# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?

Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

#### What is Redux?

1. Reducer

- Reducer는 Application State를 반환하는 함수
- State의 Key나 State의 Value는 Reducer에 의해 생성됨
- Reducer를 combineReducer를 통해 생성할 때, state를 만들어냄

2. Container

- Container는 React Component로써, Redux에 의해 관리되는 State에 직접적인 연결이 가능하다.
- 다시 말해, Redux에 의해 만들어지는 State를 직접 접근하는 Component
- React와 Redux를 연결하는 bridge 역할
- 어떤게 Container고 어떤게 일반 Component인지 알 수 있을까?

- State의 특정 부분을 이용하는 최상위 부모 Component만이 Redux에 연결되어야 함.

3. Redux

- React와 Redux는 어떤 접점도 없으며, 이를 연결하기 위해서는 반드시 react-redux를 사용해야 한다.
- react-reduxc는 connect 함수를 사용함
