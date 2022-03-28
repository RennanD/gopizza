import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';

import brandImg from '@assets/brand.png';

import { Button } from '@components/Button';
import { TextInput } from '@components/Forms/TextInput';

import { useAuth } from '@hooks/auth';
import {
  Container,
  Content,
  Title,
  BrandImage,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';

export function SingIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { singIn, isLogging } = useAuth();

  async function handleSignIn() {
    if (!email) {
      Alert.alert('Login', 'Preencha o e-mail');
      return;
    }
    if (!password) {
      Alert.alert('Login', 'Preencha a senha');
      return;
    }

    try {
      await singIn({ email, password });
    } catch (error) {
      console.log(error);
      Alert.alert('Login', error.message);
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content bounces={false}>
          <BrandImage source={brandImg} />
          <Title>Login</Title>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
            variant="secundary"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            variant="secundary"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />

          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button
            loading={isLogging}
            variant="secondary"
            onPress={() => handleSignIn()}
          >
            Entrar
          </Button>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
