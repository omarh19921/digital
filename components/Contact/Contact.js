import { useState, useEffect, useRef } from 'react';

import TextPrinter from '../TextPrinter/TextPrinter';
import CopiedLink from '../Icons/CopiedLink';

import styles from './contact.module.css';
import { useScrollText } from '../../hook/useScrollText';

const Contact = ({ text, info }) => {
  const [showText, setShowText] = useState(true);
  const [copied, setCopied] = useState(false);

  const textRefA = useRef();
  const textRefB = useRef();
  const boxRefA = useRef();
  const boxRefB = useRef();

  useScrollText(
    'tl3',
    '#contact',
    false,
    '',
    '',
    true,
    false,
    true,
    false,
    function () {
      setShowText(false);
    }
  );

  // copy to clipboard
  // usar componente TEXTPRINT para imprimir texto clipboard

  const showClipText = (e) => {
    let clipText = e.target.id;
    let type = clipText.split('-')[1];
    if (type === 'A') {
      textRefA.current.innerHTML = 'Copied to clipboard';
      textRefA.current.classList.add(styles.copiedLink);
      boxRefA.current.classList.add(styles.copiedLink);
    } else {
      textRefB.current.innerHTML = 'Copied to clipboard';
      textRefB.current.classList.add(styles.copiedLink);
      boxRefB.current.classList.add(styles.copiedLink);
    }
    return setCopied(true);
  };

  useEffect(() => {
    // console.log(copied, 'copied');
    if (!!copied) {
      setTimeout(() => {
        // console.log(copied, 'time out');
        textRefA.current.classList.remove(styles.copiedLink);
        textRefB.current.classList.remove(styles.copiedLink);
        boxRefA.current.classList.remove(styles.copiedLink);
        boxRefB.current.classList.remove(styles.copiedLink);
        setCopied(false);
      }, 2000);
    }
    return clearTimeout();
  }, [copied]);

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.contact_container}>
          <div className={styles.contact_subTitle_box} id="contact">
            <h2 className={styles.contact_subTitle}>
              <TextPrinter showText={showText} text={text} id="email" />
            </h2>
          </div>
          <div className={styles.contact_email_box}>
            <div className={styles.contact_box_left}>
              <div className={styles.contact_figure}>
                <div className={styles.contact_figure_circle}>
                  <div className={styles.contact_figure_circle_inner}></div>
                </div>
              </div>
              <div className={styles.contact_email}>
                <h4 className={styles.email}>
                  <a
                  // href={`mailto:${info}`}
                  >
                    {info}
                  </a>
                  <div
                    className={styles.iconCopy} //styles padre
                    ref={boxRefA}
                    id="copy-A"
                    onClick={(e) => {
                      navigator.clipboard.writeText(info);
                      showClipText(e);
                    }}
                  >
                    <span
                      ref={textRefA}
                      hidden={!copied}
                      className={styles.notCopiedLink} //styles hijo text
                    ></span>
                    <CopiedLink />
                  </div>
                </h4>
              </div>
            </div>
            <div className={styles.contact_box_right}>
              <div className={styles.contact_figure}>
                <div className={styles.contact_figure_diamond}>
                  <div className={styles.contact_figure_diamond_inner}></div>
                </div>
              </div>
              <div className={styles.contact_email}>
                <h4 className={styles.email}>
                  <a
                  // href={`mailto:${info}`}
                  >
                    {info}
                  </a>
                  <div
                    className={styles.iconCopy} //styles padre
                    id="copy-B"
                    ref={boxRefB}
                    onClick={(e) => {
                      navigator.clipboard.writeText(info);
                      showClipText(e);
                    }}
                  >
                    <span
                      ref={textRefB}
                      hidden={!copied}
                      className={styles.notCopiedLink} //styles hijo text
                    ></span>
                    <CopiedLink />
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
