import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

export default Cabecalho = ({title}) => {

    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

Cabecalho.propTypes = {
    title: PropTypes.string.isRequired,
};
