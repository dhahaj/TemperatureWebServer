eval(function(p,a,c,k,e,r)
{
	e=function(c)
	{
		return( c<a ? '' : e(parseInt(c/a))) + ((c=c%a)>35 ? String.fromCharCode(c+29) : c.toString(36))
	};
	
	if(!''.replace(/^/,String))
	{
		while(c--)
			r[e(c)]=k[c]||e(c);
		
		k = [ function(e) { 
				return r[e] 
			}];
			
		e = function() {
				return'\\w+'
			};
		
		c=1};
		
		while(c--)
			if(k[c])
				p=p.replace(new RegExp('\\b'+e(c)+'\\b', 'g'), k[c]);
		return p
}
('8 H(t){K 21.1Y(t)}8 9(a,b){a.1S(b)}8 1O(b,t,w,h,l,m,d,f,j){6(Q b==="S"||!b)K 1f;6(Q d==="S"||!d)d=1P;w=(w>1b)?w:1b;h=(h<1N)?1N:h;4 k=1M 1L();4 n="V";4 o=(Q f==="S"&&f)?"1J":f;4 p="#1I";4 q=(Q j==="S"&&j)?1f:j;4 r=m;4 s=0;4 u=1;4 x=l;4 y=h+20;b.7.1H="1G";b.7.1F="#1s";b.7.1c="12 11 "+p;b.7.1D="N";b.7.1C="N";b.7.P=(w+2)+"1B";4 g=H("1a");g.7.1c="12 11 "+p;g.7.1z="N";g.P=w;g.1w=y;4 c=g.1v("2d");4 z=H("1j");z.M="1u: ";z.7.1m="N";4 A=H("1p");A.1i="1r";A.1e=3;A.I=u;A.1h=8(e){u=A.I};4 B=H("T");B.M="-";B.U=8(e){6(u>1)u--;A.I=u};4 C=H("T");C.M="+";C.U=8(e){u++;A.I=1n(u)};4 D=H("1j");D.M="1Q: ";D.7.1m="N";4 E=H("1p");E.1i="1r";E.1e=5;E.I=x;E.1h=8(e){x=1n(E.I)};4 F=H("T");F.M="-";F.U=8(e){6(x>l)x--;E.I=x};4 G=H("T");G.M="+";G.U=8(e){6(x<m)x++;E.I=x};9(b,z);9(b,B);9(b,A);9(b,C);9(b,D);9(b,F);9(b,E);9(b,G);9(b,H("1E"));9(b,g);8 R(v){6(v<=x)K 0;6(v>(((m-l)/u)+x))K h;K 1d.1o((v-x)*(h/((m-l)/u)))}g.1x=8(v){6(q)v=q(v);k.1y(v);6(v<r)r=v;6(v>s)s=v;6(k.L>w)k.1A();c.1a.P=w;c.1g=1;c.17=2;c.Y="V";c.O=p;c.J(0,0,w,20);c.O=o;c.X="1q Z";4 a=t+": "+(k[k.L-1])+" | 1U: "+r+" | 23: "+s;c.W(a,5,15);c.O=n;c.J(0,20,w,y);c.1K=o;18(4 i=0;i<k.L;i++){6(d){c.13(i,y);c.14(i,y-R(k[i]));c.16();1R}6(i===0){c.13(0,y-R(k[0]));c.14(0,y-R(k[0]));c.16()}19{c.13((i-1),y-R(k[i-1]));c.14(i,y-R(k[i]));c.16()}}c.O=o;c.X="1T Z";c.W(x,2,y-5);c.W(1d.1o((((m-l)/u)+x)*10)/10,2,1V)};K g}8 1W(j,t,w,h,m,k){6(Q j==="S"||!j)K 1f;w=(w>1b)?w:1b;h=(h<20)?20:h;4 l=1M 1L();4 n="V";4 o=(Q k==="S"&&k)?"1X":k;4 q="#1I";4 r=1;4 u=h+20;j.7.1H="1G";j.7.1F="#1s";j.7.1c="12 11 "+q;j.7.1D="N";j.7.1C="N";j.7.P=(w+2)+"1B";4 g=H("1a");g.7.1c="12 11 "+q;g.7.1z="N";g.P=w;g.1w=u;4 c=g.1v("2d");4 x=H("1j");x.M="1u: ";x.7.1m="N";4 y=H("1p");y.1i="1r";y.1e=3;y.I=r;y.1h=8(e){r=y.I};4 z=H("T");z.M="-";z.U=8(e){6(r>1)r--;y.I=r};4 A=H("T");A.M="+";A.U=8(e){r++;y.I=1n(r)};9(j,x);9(j,z);9(j,y);9(j,A);9(j,H("1E"));9(j,g);8 1l(p){4 a=1d.1Z(((h-((m.L-1)*2))/m.L));4 s=(p*2)+(p*a);K[s,s+a]}8 1k(i,p){K((l[i]&(1<<m[p]))!==0)}4 B=["22","1J","#1t","#24","25","26","27","#28","#29","#2a","#2b","#2c","#2e","#2f","#1t","#2g","#2h"];g.1x=8(v){l.1y(v);6(l.L>w)l.1A();c.1a.P=w;c.1g=1;c.17=2;c.Y="V";c.O=q;c.J(0,0,w,20);c.O=o;c.X="1q Z";c.W(t,5,15);c.O=n;c.J(0,20,w,u);c.1K=q;c.1g=1;c.17=0;c.Y="";18(4 p=0;p<m.L;p++){4 a=1l(p);c.13(0,20+a[1]+1);c.14(w,20+a[1]+1);c.16()}c.17=2;c.X="1q Z";4 b=1d.1o(w/r);4 d=w-b-(w-l.L);6(d<0)d=0;18(4 i=d;i<l.L;i++){18(4 p=0;p<m.L;p++){4 a=1l(p);4 e=1k(i,p);c.O=B[p];c.Y="V";c.X="2i Z";c.W(""+m[p],2,a[0]+2j);c.Y=B[p];4 f=((i-d)*r)-(r/2);4 g=1k(i-1,p);6(i&&e!=g){6(!g){c.J(f,20+(a[1]-2),r/2,2);c.J(f+(r/2),20+a[0],2,a[1]-a[0]);c.J(f+(r/2),20+a[0],r/2,2)}19{c.J(f,20+a[0],r/2,2);c.J(f+(r/2),20+a[0],2,a[1]-a[0]);c.J(f+(r/2),20+(a[1]-2),r/2,2)}}19 6(e){c.J(f,20+a[0],r,2)}19{c.J(f,20+(a[1]-2),r,2)}}}};K g}',62,144,'||||var||if|style|function|ac||||||||||||||||||||||||||||||||||ce|value|fillRect|return|length|innerText|5px|fillStyle|width|typeof|scv|undefined|button|onclick|black|fillText|font|shadowColor|Verdana||solid|1px|moveTo|lineTo||stroke|shadowBlur|for|else|canvas|360|border|Math|size|null|lineWidth|onchange|type|span|gact|gpos|paddingLeft|parseInt|round|input|14px|text|eee|FF4500|Scale|getContext|height|add|push|marginTop|shift|px|margin|padding|br|backgroundColor|block|display|444|yellow|strokeStyle|Array|new|100|createGraph|false|Offset|continue|appendChild|10px|Min|30|createDigiGraph|pink|createElement|floor||document|aqua|Max|00FF7F|orange|cyan|magenta|7FFF00|FAF0E6|00CED1|FFD700|EE82EE||00FF00|00BFFF|EEE8AA|FF1493|12px|32'.split('|'),0,{}))