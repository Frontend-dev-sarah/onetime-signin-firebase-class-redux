import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signupReducer as SignupReducer } from './SignupReducer';

const config = {
    key: 'root',
    storage: AsyncStorage
}

// export default SignupReducer;
export default persistCombineReducers(config, {SignupReducer});