import { useEffect, useState } from "react";
import { IntlShape, useIntl } from "react-intl";

export interface Translatable {
  translate(id: string): string;
}

class Translator implements Translatable {
  private intl?: IntlShape;

  constructor(intl?: IntlShape) {
    this.intl = intl;
  }

  public translate(id: string): string {
    if (this.intl == null) {
      return '';
    }

    return this.intl!.formatMessage({ id: id });
  }
}

export default function useTranslation() {
  const intl = useIntl();

  const [t, setT] = useState<Translator>(new Translator());

  useEffect(() => {
    setT(new Translator(intl));
  }, [intl]);

  return t;
}