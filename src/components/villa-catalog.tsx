import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { kits, products, formatPrice, kitMessage, productMessage, whatsappUrl } from '@/lib/villa-content';

export function KitCatalog() {
 return <div className="product-grid">{kits.map(kit=><article className="product-card" key={kit.name}>
  <div className="overflow-hidden"><img className="product-image" src={kit.image} alt={kit.name} loading="lazy" width={1024} height={1024}/></div>
  <div className="product-body"><div className="text-[9px] font-medium tracking-[1.5px] text-muted-foreground mb-3">{kit.label}</div><h3>{kit.name}</h3><p className="product-price">{formatPrice(kit.price)} <small>Kz</small></p><p className="product-description">{kit.description}</p><div className="kit-includes">{kit.includes.map(item=><span key={item}><Check/>{item}</span>)}</div><Button asChild variant="outline" size="lg"><a href={whatsappUrl(kitMessage(kit.name))} target="_blank" rel="noopener noreferrer">Quero este kit <ArrowUpRight/></a></Button></div>
 </article>)}</div>;
}

export function CustomCatalog() {
 const [color,setColor]=useState('');
 return <div className="custom-grid">{products.map(product=><article className="custom-card" key={product.name}>
  <img src={product.image} alt={product.name} width={1024} height={1024} loading="lazy"/>
  <div className="product-body"><h3>{product.name}</h3><p className="product-price">{formatPrice(product.price)}{product.maxPrice ? ` a ${formatPrice(product.maxPrice)}` : ''} <small>Kz{product.name==='Ímanes Personalizados'?' · conjunto de 6':''}</small></p><p className="product-description">{product.description}</p>
  {product.colors.length>0?<div className="swatches" role="group" aria-label="Cores da Caixa Festa">{product.colors.map(c=><Button type="button" key={c} variant="ghost" size="icon" className="h-7 w-7 rounded-full" title={c} aria-label={c} aria-pressed={color===c} onClick={()=>setColor(c)}><span className={`swatch swatch-${c.toLowerCase().replace('-claro','')} ${color===c?'ring-2 ring-primary ring-offset-2':''}`}/></Button>)}</div>:<div className="flex-1 min-h-5"/>}
  <Button asChild variant="link" className="justify-start px-0 text-xs mt-auto"><a href={whatsappUrl(productMessage(product.name,product.colors.length>0?color:undefined))} target="_blank" rel="noopener noreferrer">{product.action}<ArrowUpRight/></a></Button></div>
 </article>)}</div>;
}