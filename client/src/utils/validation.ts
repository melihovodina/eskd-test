export const validateBelarusianPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\s/g, '');
  const patterns = [
    /^\+375\d{9}$/,
    /^80\d{9}$/
  ];
  return patterns.some(pattern => pattern.test(cleaned));
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};
