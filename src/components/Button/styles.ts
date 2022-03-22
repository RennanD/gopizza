import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export type VariantProps = 'primary' | 'secondary';

type ConatinerProps = {
  variant: VariantProps;
};

export const Container = styled(RectButton)<ConatinerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, variant }) =>
    variant === 'primary'
      ? theme.COLORS.SUCCESS_900
      : theme.COLORS.PRIMARY_800};
`;

export const TextButton = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE,
}))``;
