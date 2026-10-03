// Публичные настройки облака. Anon-ключ по замыслу Supabase публичный: данные защищены правилами доступа (RLS).
// Секретный service_role ключ сюда НЕ класть: он живёт только в coach/.env на компьютере.
window.SB_CONFIG = {
  vapid: 'BB5tmJXdpFA8JYbcFm0vHsF6eZCw4dhCkXbrUycMRlSB9agNnIGstjcQ1Xt2Sm3hnv7pEmk2DsuM68CY6LQMwhY',   // публичный ключ push (приватный в coach/.env)
  url: 'https://wcgwaupsjrhlcpyjclbl.supabase.co',
  anon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjZ3dhdXBzanJobGNweWpjbGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5MjE5OTksImV4cCI6MjEwNjQ5Nzk5OX0.P8o-NidOE4xR2T3ZAZ7am7SMVNTv4ycv6HQqEkEFO9M',
};
