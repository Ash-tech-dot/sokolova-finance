'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [sphere, setSphere] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  const submit = () => {
    if (!name.trim() || !phone.trim()) {
      alert('Пожалуйста, заполните имя и телефон')
      return
    }
    setSent(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.deco} />
      <div className={styles.deco2} />
      <div className={styles.inner}>
        <div className={styles.tag}>Записаться</div>
        <h2 className={styles.title}>Записаться на<br />бесплатную консультацию</h2>
        <p className={styles.sub}>Оставьте заявку — я свяжусь с вами в течение 24 часов</p>

        {!sent ? (
          <div className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Ваше имя</label>
                <input type="text" placeholder="Иван Иванов" value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
              </div>
              <div className={styles.field}>
                <label>Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={e => setPhone(e.target.value)} autoComplete="tel" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Email</label>
                <input type="email" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
              </div>
              <div className={styles.field}>
                <label>Сфера бизнеса</label>
                <select value={sphere} onChange={e => setSphere(e.target.value)}>
                  <option value="">Выберите сферу</option>
                  <option>Строительство</option>
                  <option>Торговля</option>
                  <option>Услуги</option>
                  <option>Производство</option>
                  <option>Другое</option>
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label>Коротко о вашем запросе</label>
              <textarea placeholder="Расскажите, что вас беспокоит в финансах вашего бизнеса..." value={msg} onChange={e => setMsg(e.target.value)} />
            </div>
            <p className={styles.note}>Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
            <button className={styles.submit} onClick={submit}>
              Отправить заявку — это бесплатно
            </button>
          </div>
        ) : (
          <div className={styles.success}>
            <div className={styles.check}>✅</div>
            <h3>Заявка отправлена!</h3>
            <p>Любовь свяжется с вами в течение 24 часов</p>
          </div>
        )}
      </div>
    </section>
  )
}
