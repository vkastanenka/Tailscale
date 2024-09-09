// utils
import cx from 'classnames'

const Testimonials = ({ ...props }): JSX.Element => {
  return (
    <section
      className={cx(
        'overflow-hidden',
        'bg-black-bg',
        'p-top-185',
        'p-bottom-185'
      )}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-20')}>
        <div className={cx('relative')}>
          <div
            className={cx(
              'absolute',
              'inset-0',
              'z-10',
              'm-auto',
              'aspect-[1051/375]',
              'w-full',
              'max-w-[1051px]',
              'rounded-[300px]',
              'blur-[97px]',
              'bg-black-bg'
            )}
          />
          <div
            className={cx(
              'absolute',
              'inset-0',
              'z-20',
              'm-auto',
              'aspect-[639/229]',
              'w-full',
              'max-w-[639px]',
              'rounded-[300px]',
              'blur-[52px]',
              'bg-black-bg'
            )}
          />
          <div
            className={cx(
              'absolute',
              'inset-0',
              'flex',
              'items-center',
              'justify-center'
            )}
          >
            <h4
              className={cx(
                't-h3',
                'z-30',
                'rounded-[10px]',
                'bg-heading-black',
                'px-[30px]',
                'py-[25px]',
                'text-center',
                'text-white'
              )}
            >
              Developer
              <span className={cx('text-white')}>approved</span>
            </h4>
          </div>
          <div className={cx('space-y-[45px]')}>
            <div
              className={cx('marquee-container', 'twitter-marquee')}
              style={
                {
                  '--pause-on-hover': 'running',
                  '--pause-on-click': 'normal',
                  '--width': '100%',
                  '--transform': 'none',
                } as React.CSSProperties
              }
            >
              <div
                className={cx('marquee')}
                style={
                  {
                    '--play': 'running',
                    '--direction': 'reverse',
                    '--duration': '242s',
                    '--delay': '0s',
                    '--iteration-count': 'infinite',
                    '--min-width': '100%',
                  } as React.CSSProperties
                }
              >
                <div className={cx('initial-child-container')}>
                  <div
                    className={cx('child')}
                    style={
                      {
                        '--transform': 'none',
                      } as React.CSSProperties
                    }
                  >
                    {/* Testimonial card - refactor */}
                    <div
                      className={cx(
                        'mx-5',
                        'flex',
                        'h-full',
                        'w-[400px]',
                        'flex-col',
                        'justify-between',
                        'rounded-xl',
                        'border',
                        'p-5',
                        'border-[#ffffff14]'
                      )}
                    >
                      <div>
                        <div
                          className={cx(
                            'flex',
                            'items-center',
                            'gap-[9px]',
                            'whitespace-normal'
                          )}
                        >
                          <div
                            className={cx(
                              'relative',
                              'h-8',
                              'w-8',
                              'shrink-0',
                              'overflow-hidden',
                              'rounded'
                            )}
                          >
                            {/* User image */}
                            {/* <Image
                              priority
                              alt={logo.altText}
                              src={urlFor(logo.url).url()}
                              className={cx("mx-auto")}
                              width={logo.dimensions.width}
                              height={logo.dimensions.height}
                            /> */}
                          </div>
                          <div>
                            {/* User Handle */}
                            <div
                              className={cx(
                                'flex',
                                'items-center',
                                'gap-2',
                                'whitespace-normal'
                              )}
                            >
                              <div className={cx('t-15', 'text-white')}>
                                @user-handle
                              </div>
                              <span>
                                <svg
                                  width="3"
                                  height="4"
                                  viewBox="0 0 3 4"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="1.43213"
                                    cy="1.79932"
                                    r="1.43213"
                                    fill="white"
                                    fill-opacity="0.14"
                                  ></circle>
                                </svg>
                              </span>
                            </div>
                            {/* User Name */}
                            <div className={cx('t-13', 'text-[#fff6]')}>
                              User Name
                            </div>
                          </div>
                        </div>
                        {/* Review */}
                        <div
                          className={cx(
                            'mt-[13px]',
                            'whitespace-normal',
                            'leading-[1.39]',
                            'tracking-[-0.48px]',
                            'text-white'
                          )}
                        >
                          Setting up a mesh VPN on all my devices was so damn
                          easy thanks to{' '}
                          <span className={cx('text-#a4a4a4')}>@Tailscale</span>
                          . A tightly sealed network of remote devices with
                          almost no configuration and also ease of adding a new
                          device to the mesh is just what I wanted. Amazing work{' '}
                          <span className={cx('text-#a4a4a4')}>@Tailscale</span>
                          !
                        </div>
                      </div>
                      <div
                        className={cx(
                          't-13',
                          'mt-[21px]',
                          'flex',
                          'items-center',
                          'gap-4',
                          'text-[#ffffff8a]'
                        )}
                      >
                        <div
                          className={cx(
                            't-13',
                            'mt-[21px]',
                            'flex',
                            'items-center',
                            'gap-4',
                            'text-[#ffffff8a]'
                          )}
                        >
                          <div className={cx('flex', 'items-center', 'gap-15')}>
                            <div className={cx('w-4', 'shrink-0')}>
                              {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 17"
                              >
                                <use href="/sprite.svg#reply"></use>
                              </svg> */}
                            </div>
                            Reply
                          </div>
                          <div>Share</div>
                          <div className={cx('mb-2')}>...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

const userDataRow1 = [
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/c30e887711dca094036b0af041ad73e37834f169-399x399.jpg',
    handle: '@sharathpatali',
    name: 'Sharath Patali',
    testimonial:
      'Setting up a mesh VPN on all my devices was so damn easy thanks to <span class="text-[#A4A4A4]">@Tailscale</span>. A tightly sealed network of remote devices with almost no configuration and also ease of adding a new device to the mesh is just what I wanted. Amazing work <span class="text-[#A4A4A4]">@Tailscale</span>!',
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/d6eba57465b53fcbdb6c4e05d090ef3b5c17b6e0-400x400.jpg',
    handle: '@danp128',
    name: 'Dan Peterson',
    testimonial:
      'Set up <span class="text-[#A4A4A4]">@Tailscale</span> across a few home and cloud devices in a few minutes. Magical! ✨',
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/667e7bb7044b0620e4fcee00b7cdc1ff7497f4a6-200x200.jpg',
    handle: '@simonw',
    name: 'Simon Willison',
    testimonial: `OK yeah <span class="text-[#A4A4A4]">@tailscale</span> is good. This morning I got it running on my iPhone and a Linux server JUST using my phone (and Prompt by Panic) and they're now in a mesh network together.<br/>Just got it running on my Mac too, so now it's a three-device network. Completely free, took minutes.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/9814cf6ff0e3fcb99b91522a22c62a07b13d7592-400x400.jpg',
    handle: '@colek42c',
    name: 'Cole Kennedy',
    testimonial:
      'I am amazed at how easy <span class="text-[#A4A4A4]">@tailscale</span> made it for me to create zero-trust multi-cloud environment for my customer. I have a ton of use cases going through my head.',
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/ef46b8df2a49b866ddbd790e525d4fe017da7808-247x247.jpg',
    handle: '@tlesher',
    name: 'Tim Lesher',
    testimonial: `So I decided to reserve this morning to read up on <span class="text-[#A4A4A4]">@tailscale</span> and get it set up on my various machines at home.<br/>That took a hot 30 minutes and I have to find something else to do. 🤷‍♂️`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/40c1d528c878e8a2617ec2e2822587ca2408f651-400x400.jpg',
    handle: '@tessalau',
    name: 'Tessa Lau',
    testimonial: `Just paid for <span class="text-[#A4A4A4]">@Tailscale</span>. Installed it on our robots; so far so good. Compared to OpenVPN:<br/>* Serverless<br/>* Always on<br/>* Same config in office &amp; field<br/>* Scales to large # devices<br/>* GUI-based ACL w/SSO<br/>* Fixed IPs, DNS-friendly<br/>* Dead simple config+use`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/3a0fb88ac6fdfc10fa3e4048590243ffcca69b5d-400x400.jpg',
    handle: '@moderat10n',
    name: 'Michael P.',
    testimonial: `After installing <span class="text-[#A4A4A4]">@Tailscale</span> on a bunch of machines on my home network (Linux x86 + aarch64, MacOS, Windows) I've just ventured out. Had to restart the process but holy moly, just SSH'ed into my boxes, building code and pushing configs around like I'm home. Amazing. Converted`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/befcefa7a496fb1bff8767a9ff5cc6bf91459e78-400x400.jpg',
    handle: '@morgallant',
    name: 'Morgan Gallant',
    testimonial:
      'The beauty of <span class="text-[#A4A4A4]">@Tailscale</span> is that they enable people to make their own personal internet, for free in most cases. It’s this weird paradigm shift, since you have to actively work to make applications insecure rather than the other way around.',
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/c30e887711dca094036b0af041ad73e37834f169-399x399.jpg',
    handle: '@johnrlynch',
    name: 'John Lynch',
    testimonial:
      'If you deal with servers in any way drop everything and get this. VPN nirvana. <span class="text-[#A4A4A4]">@Tailscale</span> https://tailscale.com',
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/bc5a3d60fc60059dcb367261d021c67dba5e0d7c-400x400.jpg',
    handle: '@devilmonastery',
    name: 'Michael R.',
    testimonial:
      '<span class="text-[#A4A4A4]">@Tailscale</span> busts double nat (travel router -&gt; plane wifi) and connects me to my home server so I can silence a prometheus humidity alert (can’t really add water to the humidifier from here).',
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/d6eba57465b53fcbdb6c4e05d090ef3b5c17b6e0-400x400.jpg',
    handle: '@oddur',
    name: 'Oddur Magnusson',
    testimonial:
      'Sometimes you come across a tool that changes how you see things, <span class="text-[#A4A4A4]">@Tailscale</span> is one of those. Thinking in terms of point 2 point VPN tunnels seems so outdated once you have seen that lights.',
  },
]

const userDataRow2 = [
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/0cc0a8b2d3d85e8ecb1c17ada174103f4a14f8a1-400x400.jpg',
    handle: '@jgavinray',
    name: 'J. Gavin Ray',
    testimonial: `Been using <span class="text-[#A4A4A4]">@Tailscale</span> for a while at work and personally. Who would have thought networking could be... easy?!`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/5cd5ff7a02b6f7e820c83a3e009f90c224795481-400x400.jpg',
    handle: '@dixdotdev',
    name: 'big jim',
    testimonial: `The campus WiFi also prevented my original Wireguard VPN. Multiple NATs, blocked ports... Tailscale just figures it all out. There's honestly dozens of other reasons, but for me it just helps me to be portable. I run pihole too. I'd be lost without it now!`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/1853ad560cb86e4e7914758279032df9f8ae231c-400x400.jpg',
    handle: '@TheodoreJSalvo',
    name: 'Theo Salvo',
    testimonial: `Oh <span class="text-[#A4A4A4]">@Tailscale</span>, I’ve put you off for so long not knowing what I was missing. In advance of #KubeCon I now can manage my home NAS and my home k8s cluster…from my phone! Thank you!`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/09cc48c4ece77ef6306620d7fd697a058cf96e1f-400x400.png',
    handle: '@falsefalse',
    name: 'llia',
    testimonial: `Thanks to <span class="text-[#A4A4A4]">@Tailscale</span> being available as a package for <span class="text-[#A4A4A4]">@Synology</span> I was able to renew <span class="text-[#A4A4A4]">@letsencrypt</span> certificate on my home NAS while being 8000 kilometers away from it. Amazing piece of tech 🥹`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/a088fd39d0bd7b6895a856dc73b5222469fb4f2f-400x400.jpg',
    handle: '@bensonk42',
    name: 'Benson Kalahar',
    testimonial: `No joke, some of the best software I've ever used. Between machines that are on the tail scale network, everything is encrypted by default. If you use it for all the machines you want to have talking, you install it and never think about it again.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/f205e0110c4b47e29bb396274bb4138b48829e9d-400x400.jpg',
    handle: '@qmacro',
    name: '@qmacro@hachyderm.io',
    testimonial: `The hardest thing to understand about <span class="text-[#A4A4A4]">@tailscale</span> is that there are no hard things to understand about <span class="text-[#A4A4A4]">@tailscale</span> and it just works.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/2741d59e4a69a546a901094fdce259c645592f15-400x400.jpg',
    handle: '@techyteachme',
    name: 'Zack Allen',
    testimonial: `Just setup <span class="text-[#A4A4A4]">@Tailscale</span> and my mind is BLOWN.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/699b217a40783e1c54dc8b3aadb451ec072f38aa-400x400.jpg',
    handle: '@simonvc',
    name: 'Simon Vans-Colina',
    testimonial: `@Tailscale</span> is so good it makes me angry it didn't exist since the beginning of the internet. It's basically the upgrade the internet needed. Fully-Routable (+firewall) -&gt; NAT'd (+STUN) -&gt; Encrypted Personal Mesh.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/2d371bca087e746a525c5722ba6321414f3d160d-400x400.jpg',
    handle: '@mrabino1',
    name: 'Matthew V Rabinowitz',
    testimonial: `I am not an investor in, <span class="text-[#A4A4A4]">@tailscale</span> (though, I wish I were). From my lens they will change how we all use the internet. Just a question of when, not if. #privacy`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/c587f7a1d48cfbedaf086a00ab8ecd6bf3bc5ab1-400x400.jpg',
    handle: '@shanselman',
    name: 'Scott Hanselman',
    testimonial: `Just Remote Desktop’ed into my machine at home using my iPhone, <span class="text-[#A4A4A4]">@Tailscale</span>, and the excellent Remote Desktop iPhone app. I needed to edit a JSON file using Azure Storage Explorer for my podcast while on vacation. Did it over LTE on a train in Switzerland. AMAZING`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/30acb0cd8aa21edb1b4170b8a02a7481af0c5d87-400x400.jpg',
    handle: '@libsysguy',
    name: 'Elliott Davis',
    testimonial: `I tried <span class="text-[#A4A4A4]">@Tailscale</span> for the first time last night. Holy smokes what a delightfully well thought out product`,
  },
]

const userDataRow3 = [
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/893cbf119ed77eb46519490d440a4dbef2e95ab4-400x400.jpg',
    handle: '@plasticine',
    name: 'Justin Morris',
    testimonial: `Geez <span class="text-[#A4A4A4]">@Tailscale</span> is just flat-out good technology 😍 The implications for improving and uplifts so many thing from developer and operator experience dramatically. The more I play with it the more impressed I am. Excellent tooling.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/715a14f6c54bedf31d85e69e26036a0ca758eac8-400x400.jpg',
    handle: '@jashankj',
    name: 'Jashank Jeremy',
    testimonial: `I've run my own VPN for ages (since 2015, I think?) — and I'm now seriously considering turning it off, because <span class="text-[#A4A4A4]">@Tailscale</span> seems to do everything I want ... and has stuff I never quite got to behave right. No muss, no fuss; excellent.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/46050f1c19bfefdb091abddca162b8f2e510163a-400x400.jpg',
    handle: '@LiamJKeegan',
    name: 'Liam Keegan',
    testimonial: `Uhh this is sweet!<br/><br/>Redirecting SSL authentication to Tailscale to handle it for you eliminates the need to manage PKI at scale, or go through the nightmare of changing keys out when someone leaves.<br/><br/>And, EVERYTHING is protected, regardless of where the workload loves. AWESOME!`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/05a03e8d2de22c1fa1a9bd04d9cec22a501be22f-400x400.jpg',
    handle: '@matolucina',
    name: 'Martin Lucina',
    testimonial: `Install <span class="text-[#A4A4A4]">@Tailscale</span>. Click "Share node". Send link. 2 minutes later, someone who's never used Tailscale before reports "I can connect to the machine, this works like magic!`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/0b295eee21960a80835521c44021ab524cd5dda3-400x400.jpg',
    handle: '@sumercip',
    name: 'Sümer Cip',
    testimonial: `I don't like ranting about software. But I will make an exception: <span class="text-[#A4A4A4]">@Tailscale</span> is really AMAZING! I have managed to set it up for my personal use WITHOUT reading a single line of documentation.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/69b2250303fb47ee233410ecd6f328797534ebba-400x400.jpg',
    handle: '@jbrooksuk',
    name: 'James Brooks',
    testimonial: `I've been using <span class="text-[#A4A4A4]">@Tailscale</span> for a few weeks now and it's so good. I can't believe it's free for personal use.<br/><br/>I love that I can access my local network from anywhere.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/2528193c3795e7834d24f547daab358290558244-384x384.jpg',
    handle: '@masonegger',
    name: 'Mason Egger',
    testimonial: `Another tool that I absolutely LOVE using is <span class="text-[#A4A4A4]">@Tailscale</span>. You never realize you need a VPN until you do. Shady hotel wifi, no match. The absolute ease of use Tailscale brings is legit inspiring me to reconsider starting up a home lab again.<br/><br/>Bravo Tailscale team.`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/8f98cf6351000f64a12a9077000487cb0b0b787a-400x400.png',
    handle: '@mtiller',
    name: 'Michael Tiller',
    testimonial: `A few days ago, I said I hadn’t had any experience with <span class="text-[#A4A4A4]">@tailscale</span>. Well, now I have and all I can say is WOW!  I’ve now configured two private networks and it was SO easy to use and did everything I needed. Installation on Linux, Mac and Windows was a snap. KUDOS!`,
  },
  {
    image:
      'https://cdn.sanity.io/images/w77i7m8x/production/e79e69c33d9bbd12834c61944d5437e6ed0cecd4-400x400.jpg',
    handle: '@raesene',
    name: 'Rory McCune',
    testimonial: `Gotta say, <span class="text-[#A4A4A4]">@Tailscale</span> is really good stuff. Easy to configure, flexible, fast. Wanted to route my traffic via home while travelling, SSH into a VM at home setup an exit node, done!`,
  },
]
