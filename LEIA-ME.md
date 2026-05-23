# Cuida Ordem — PWA para iPhone

## 📁 Estrutura de arquivos necessária

```
cuida-ordem/
├── index.html
├── manifest.json
├── sw.js
└── icons/
    ├── icon-152.png
    ├── icon-167.png
    ├── icon-180.png
    ├── icon-192.png
    └── icon-512.png
```

---

## 🖼️ Criar os ícones

Você precisa criar um ícone quadrado do app (fundo preto, símbolo dourado recomendado).

Use um destes sites gratuitos para gerar todos os tamanhos:
- https://www.pwabuilder.com/imageGenerator
- https://realfavicongenerator.net

Faça upload de uma imagem 512×512px e baixe o pacote. Renomeie os arquivos conforme a lista acima e coloque dentro da pasta `icons/`.

---

## 🚀 Publicar no Netlify (gratuito)

1. Acesse https://netlify.com e crie uma conta gratuita
2. No painel, clique em **"Add new site" → "Deploy manually"**
3. **Arraste a pasta `cuida-ordem/` inteira** para a área indicada
4. Aguarde o deploy (leva menos de 1 minuto)
5. O Netlify gera um link como: `https://seu-app.netlify.app`

> ✅ HTTPS é automático e gratuito no Netlify.

---

## 📱 Instalar no iPhone

1. Abra o link do app no **Safari** (obrigatório — Chrome não suporta PWA no iOS)
2. Toque no botão de **compartilhar** (ícone de quadrado com seta para cima)
3. Role e toque em **"Adicionar à Tela de Início"**
4. Confirme o nome e toque em **"Adicionar"**

O app aparece na tela inicial com ícone próprio e abre em tela cheia, sem barra do Safari! ✝️

---

## 🔔 Notificações Push no iPhone

- Requer iOS **16.4 ou superior**
- O app precisa estar **instalado na tela inicial** (não funciona pelo Safari diretamente)
- Na primeira abertura após instalação, autorize as notificações quando solicitado

---

## ⚠️ Dicas importantes

- Sempre abra pelo **Safari** para instalar — Chrome e Firefox não suportam PWA no iOS
- Os dados são salvos localmente no dispositivo (localStorage)
- Para atualizar o app após mudanças: republique no Netlify (basta arrastar a pasta novamente)
