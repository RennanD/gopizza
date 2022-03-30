import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, DeleteLabel, Header, Title } from './styles';

export function Product(): JSX.Element {
  const theme = useTheme();

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header colors={theme.COLORS.GRADIENT}>
        <Title>Cadastrar</Title>

        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
