import { PROJECT_CONFIG } from '#project';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';

interface SeoProps {
  title?: string;
  titles?: string[];
  desc?: string;
  image?: string;
}

const Seo: FunctionComponent<SeoProps> = ({
  title = PROJECT_CONFIG.seo.title,
  titles,
  desc = PROJECT_CONFIG.seo.desc,
  image = PROJECT_CONFIG.seo.image,
}) => {
  const fullTitle = titles ? `${titles?.join(' • ')} • ${title}` : title;
  const url = PROJECT_CONFIG.url;
  const author = PROJECT_CONFIG.author;
  const handle = PROJECT_CONFIG.handle;

  return (
    <Head>
      {fullTitle && <title key='title'>{fullTitle}</title>}
      {fullTitle && <meta name='title' content={fullTitle} key='meta:title' />}
      {author && <meta name='author' content={author} key='meta:author' />}
      {fullTitle && (
        <meta property='og:title' content={fullTitle} key='og:title' />
      )}
      <meta property='og:url' content={url} key='og:url' />
      <meta property='og:type' content='website' key='og:type' />
      {desc && <meta property='og:description' content={desc} key='og:desc' />}
      {image && <meta property='og:image' content={image} key='og:image' />}
      <meta property='og:image:type' content='image/png' key='og:image:type' />
      <meta property='og:image:width' content='800' key='og:image:width' />

      {handle && <meta name='twitter:site' content={handle} key='tw:site' />}
      {fullTitle && (
        <meta name='twitter:title' content={fullTitle} key='tw:title' />
      )}
      {desc && <meta name='twitter:description' content={desc} key='tw:desc' />}
      {image && <meta name='twitter:image' content={image} key='tw:image' />}
      <meta name='twitter:card' content='summary_large_image' key='tw:card' />
      <meta name='viewport' content='width=device-width' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Seo;
