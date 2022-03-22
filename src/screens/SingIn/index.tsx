import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import brandImg from '@assets/brand.png';

import { Button } from '@components/Button';
import { TextInput } from '@components/Forms/TextInput';

import {
  Container,
  Content,
  Title,
  BrandImage,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';

export function SingIn(): JSX.Element {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content bounces={false}>
          <BrandImage source={brandImg} />
          <Title>Login</Title>
          <TextInput
            placeholder="E-mail"
            variant="secundary"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            placeholder="Senha"
            variant="secundary"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />

          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button variant="secondary">Entrar</Button>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
