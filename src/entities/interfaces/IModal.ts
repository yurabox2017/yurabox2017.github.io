import React from 'react';

export default interface IModal {
  children?: React.ReactNode;
  visible: boolean;
  header: string;
  onClose: () => void;
}
