import {StyleSheet} from 'react-native';
import colors from '../../Styles/colors';
const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
