import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import ipad from "../../images/study sets/intro-pad.jpg";
import iphone from "../../images/study sets/intro-phone-alt.jpg";
import mac from "../../images/study sets/cardScreen.png";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import NavTest from "../../components/sections/NavTest";
import { center } from "underscore";
import { Col, Container, Button, Row } from "react-bootstrap";
import appStoreButtonWhite from "../../images/misc/download-on-app-store-white.svg";
import appStoreButtonBlack from "../../images/misc/download-on-app-store-black.svg";
import "../../details.css";

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: min(6vw, 75px);
`;

const TitleDiv = styled.div`
  ${DeviceDiv};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to right, #622aff 0%, #dd04d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DeviceDiv = styled.div`
  max-width: 100%;
  display: inline-block;
`;

const MaxTextWidthDiv = styled.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

export default function StudySetsIndex() {
  return (
    <Layout>
      <SEO title="Study Sets Details" />
      <div class="device-grid-container">
        <div class="device-grid">
          <div class="device">
            <img
              src={ipad}
              alt="iPad"
              style={{
                marginTop: "130%",
                maxWidth: "200%",
                marginLeft: "-20%",
              }}
            />
          </div>
          <div class="device"></div>
          <div class="device"></div>

          <div class="device"></div>
          <TitleDiv>
            <Title>Study Sets</Title>
          </TitleDiv>
          <div class="device">
            <img
              src={mac}
              style={{
                maxWidth: "250%",
                marginTop: "50%",
              }}
              alt="Macbook"
            />
          </div>

          <div class="device">
            <img
              src={iphone}
              style={{
                maxWidth: "150%",
                marginTop: "-100%",
              }}
              alt="iPhone"
            />
          </div>
          <div class="device"></div>
          <div class="device"></div>
        </div>
      </div>

      <Container fluid>
        <MaxTextWidthDiv className="py-5">
          <h3>Study Sets</h3>
          <h1>Your Inbox, upgraded</h1>
          <p>
            Big Mail brings a fresh new look to your inbox, as well as an
            entirely new way of working with it. From advanced A.I
            categorisation, to its carefully crafted design, the result is less
            time organising your inbox, and more time enjoying it. And best of
            all it works with your existing email address. Say hello to Big
            Mail.
          </p>
          <img
            src={appStoreButtonBlack}
            style={{ width: "150px", paddingTop: "25px" }}
          ></img>
        </MaxTextWidthDiv>
      </Container>

      <Container fluid className="bg-light">
        <div class="section py-5">
          <div class="container-xxl py-5 px-lg-4">
            <div class="row px-4 pb-4">
              <div class="col-lg-8">
                <h2 class="text-indigo">Big Smarts</h2>
                <p class="subtitle">
                  Big Mail is packed with advance features to make your inbox
                  smarter and more organised, all without compromising on
                  privacy.
                </p>
              </div>
            </div>

            <div class="row g-4">
              <div class="col-lg-7">
                <div class="card">
                  <div class="card-body">
                    <h3 class="text-indigo">
                      Your emails organised in the blink of an A.I.
                    </h3>
                    <p class="detail">
                      Big Mail can intelligently and automatically organise your
                      inbox into distinct categories (we call them Scenes).
                      Whether it's elevating important conversations, or filing
                      away your latest purchases, Big Mail has you covered.
                    </p>
                  </div>
                  <figure
                    class="figure-ipad"
                    style={{ backgroundImage: `url(${iphone})` }}
                  ></figure>
                </div>
              </div>

              <div class="col-lg-5 d-flex">
                <div class="card bg-indigo">
                  <div class="card-body d-flex flex-column">
                    <h3 class="">On device categorisation</h3>
                    <div class="d-flex flex-grow-1 align-items-center">
                      <p class="detail lg p-4">
                        Big Mail categorises your mail on device, meaning your
                        emails are never shared with us or anyone else. Now
                        that's smart.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div class="col-lg-12 d-flex">
        <div class="card d-flex">
          <div class="card-body col-lg-8">
            <h3 class="text-indigo">Let your emails make a Scene</h3>
            <p class="detail">Rather than present every email in the same way, a Scene in Big Mail optimises the layout specifically for it. It makes newsletters inviting, purchases easy to find, and conversations a breeze. With six Scenes – Conversations, Newsletters, Purchases, Notifications, Events and Files – your inbox has never been more organised.</p>
          </div>
          
          <div class="row p-4">
            <div class="col-sm-4">
              <img src="/assets/images/heros/scene-conversations.jpg" class="figure-iphone" alt="Screenshot of Conversations Scene">
            </div>
            <div class="col-sm-4">
              <img src="/assets/images/heros/scene-newsletters.jpg" class="figure-iphone" alt="Screenshot of Newsletter Scene">
            </div>
            <div class="col-sm-4">
              <img src="/assets/images/heros/scene-events.jpg" class="figure-iphone" alt="Screenshot of Events Scene">
            </div>
          </div>
        </div>
      </div> */}

              {/* <div class="col-lg-5 d-flex">
        <div class="card d-flex">
          <div class="card-body">
            <h3 class="text-indigo">Reply now or Reply Later.<br>(Probably later)</h3>
            <p class="detail">Ever receive an email but can't reply to it right away? Big Mail has a built in "Reply Later" workflow so you can pick it up later on. It even syncs across all your devices.</p>
          </div>
          <img src="/assets/images/heros/reply-later.jpg" class="figure-iphone figure-crop-b-50" alt="Screenshot of reply later">
        </div>
      </div> */}

              {/* <div class="col-lg-7 d-flex">
        <div class="card">
          <div class="card-body">
            <h3 class="text-indigo">Approve new senders with The Bouncer</h3>
            <p class="detail">With Big Mail you decide who gets in your inbox. The first time someone emails you they appear in The Bouncer, then you decide if you want to receive their messages. You can change your mind anytime.</p>
          </div>
          <figure class="figure-ipad" style="background-image: url('/assets/images/heros/bouncer.jpg');"></figure>
        </div>
      </div> */}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

//             <div class="col-lg-5 d-flex">
//               <div class="card bg-indigo">
//                 <div class="card-body d-flex flex-column">
//                   <h3 class="">On device categorisation</h3>
//                   <div class="d-flex flex-grow-1 align-items-center">
//                     <p class="detail lg p-4">
//                       Big Mail categorises your mail on device, meaning your
//                       emails are never shared with us or anyone else. Now that's
//                       smart.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-lg-12 d-flex">
//               <div class="card d-flex">
//                 <div class="card-body col-lg-8">
//                   <h3 class="text-indigo">Let your emails make a Scene</h3>
//                   <p class="detail">
//                     Rather than present every email in the same way, a Scene in
//                     Big Mail optimises the layout specifically for it. It makes
//                     newsletters inviting, purchases easy to find, and
//                     conversations a breeze. With six Scenes – Conversations,
//                     Newsletters, Purchases, Notifications, Events and Files –
//                     your inbox has never been more organised.
//                   </p>
//                 </div>

//                 <div class="row p-4">
//                   <div class="col-sm-4">
//                     <img
//                       src="assets/images/heros/scene-conversations.jpg"
//                       class="figure-iphone"
//                       alt="Screenshot of Conversations Scene"
//                     />
//                   </div>
//                   <div class="col-sm-4">
//                     <img
//                       src="assets/images/heros/scene-newsletters.jpg"
//                       class="figure-iphone"
//                       alt="Screenshot of Newsletter Scene"
//                     />
//                   </div>
//                   <div class="col-sm-4">
//                     <img
//                       src="assets/images/heros/scene-events.jpg"
//                       class="figure-iphone"
//                       alt="Screenshot of Events Scene"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-lg-5 d-flex">
//               <div class="card d-flex">
//                 <div class="card-body">
//                   <h3 class="text-indigo">
//                     Reply now or Reply Later.
//                     <br />
//                     (Probably later)
//                   </h3>
//                   <p class="detail">
//                     Ever receive an email but can't reply to it right away? Big
//                     Mail has a built in "Reply Later" workflow so you can pick
//                     it up later on. It even syncs across all your devices.
//                   </p>
//                 </div>
//                 <img
//                   src="assets/images/heros/reply-later.jpg"
//                   class="figure-iphone figure-crop-b-50"
//                   alt="Screenshot of reply later"
//                 />
//               </div>
//             </div>

//             <div class="col-lg-7 d-flex">
//               <div class="card">
//                 <div class="card-body">
//                   <h3 class="text-indigo">
//                     Approve new senders with The Bouncer
//                   </h3>
//                   <p class="detail">
//                     With Big Mail you decide who gets in your inbox. The first
//                     time someone emails you they appear in The Bouncer, then you
//                     decide if you want to receive their messages. You can change
//                     your mind anytime.
//                   </p>
//                 </div>
//                 <figure
//                   class="figure-ipad"
//                   style={{ backgroundImage: `url(${iphone})` }}
//                 ></figure>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="section bg-light">
//         <div class="container-xxl py-5 px-lg-4">
//           <div class="row px-4 pb-4">
//             <div class="col-lg-8">
//               <h2 class="text-red">Big Design</h2>
//               <p class="subtitle">
//                 Big Mail is a top to bottom rethink of your inbox. Not only
//                 that, but it was designed to look right at home across all your
//                 devices thanks to its entirely native iOS and macOS design.
//               </p>
//             </div>
//           </div>

//           <div class="row g-4">
//             <div class="col-lg-7">
//               <div class="card">
//                 <div class="card-body">
//                   <h3 class="text-red">Newsletters, taken to the edge</h3>
//                   <p class="detail">
//                     Enjoy a distraction free reading experience with Big Mail's
//                     immersive full screen reader mode for newsletters. Controls
//                     are tucked away, letting your newsletters shine.
//                   </p>
//                 </div>
//                 <img
//                   class="figure-general left"
//                   src="assets/images/heros/macbook-newsletters.jpg"
//                   alt="Macbook showing Big Mail reader mode"
//                 />
//               </div>
//             </div>

//             <div class="col-lg-5 d-flex">
//               <div class="card bg-glancing dark">
//                 <div class="card-body d-flex flex-column">
//                   <h3>Glancing</h3>
//                   <div class="d-flex flex-grow-1 align-items-center">
//                     <p class="detail lg p-4">
//                       Glancing marks messages as read as you scroll past them in
//                       lists – great for notifications. Inbox zero here you come.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-lg-5 d-flex">
//               <div class="card">
//                 <div class="card-body">
//                   <h3 class="text-red">Sender profiles</h3>
//                   <p class="detail">
//                     Looking for a receipt from a particular store, or the latest
//                     newsletter from your favourite writer? Profiles make it a
//                     snap.
//                   </p>
//                 </div>
//                 <img
//                   src="assets/images/heros/profile.jpg"
//                   class="figure-iphone figure-crop-b-50"
//                   alt="Screenshot of sender profile"
//                 />
//               </div>
//             </div>

//             <div class="col-lg-7 d-flex">
//               <div class="card">
//                 <div class="card-body">
//                   <h3 class="text-red">Detached attachments</h3>
//                   <p class="detail">
//                     Big Mail presents everything you've been sent in one easy to
//                     view and organised grid. Hunting for files in long threads
//                     is a thing of the past.
//                   </p>
//                   <img
//                     class="figure-general p-3 mt-4"
//                     src="assets/images/heros/files-alt.jpg"
//                     alt="Files"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div class="col-lg-7">
//               <div class="card dark">
//                 <div class="card-body">
//                   <h3 class="text-red">
//                     Introducing The Latest (and greatest)
//                   </h3>
//                   <p class="detail">
//                     The Latest gives you a bird's-eye view of everything
//                     happening in your inbox. Customise it to make it yours.
//                   </p>
//                 </div>
//                 <img
//                   src={iphone}
//                   class="figure-iphone figure-crop-b-50"
//                   alt="Screenshot of Big Mail in dark mode"
//                 />
//               </div>
//             </div>

//             <div class="col-lg-5 d-flex">
//               <div class="card bg-red">
//                 <div class="card-body d-flex flex-column">
//                   <h3>Unified Inbox</h3>
//                   <div class="d-flex flex-grow-1 align-items-center">
//                     <p class="detail lg p-4">
//                       See all your emails from multiple accounts in one unified
//                       inbox. Nice.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-lg-5 d-flex">
//               <div class="card d-flex">
//                 <div class="card-body d-flex flex-column">
//                   <h3 class="text-red">
//                     Magic avatars.
//                     <br />
//                     Avatar-cadabra.
//                   </h3>
//                   <p class="detail">
//                     Big Mail automatically finds the best avatar for your
//                     messages.
//                   </p>
//                   <div class="d-flex flex-grow-1">
//                     <img
//                       class="figure-general align-self-center"
//                       src="assets/images/heros/avatars.jpg"
//                       alt="Avatars"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-lg-7 d-flex">
//               <div class="card d-flex">
//                 <div class="card-body">
//                   <h3 class="text-red">
//                     Email that's fun.
//                     <br />
//                     (It's no joke)
//                   </h3>
//                   <p class="detail">
//                     We spend all day in our inbox, so why not make it fun? Big
//                     Mail is packed with whimsical flourishes and bursting with
//                     colour.
//                   </p>
//                 </div>
//                 <figure
//                   class="figure-ipad"
//                   style={{ backgroundImage: `url(${iphone})` }}
//                 ></figure>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="section bg-light">
//         <div class="container-xxl py-5 px-lg-4">
//           <div class="row px-4 pb-4">
//             <div class="col-lg-8">
//               <h2 class="text-green">Big Privacy</h2>
//               <p class="subtitle">
//                 Big Mail is the first mail client to be built from the ground up
//                 with privacy in mind. Finally, privacy as standard.
//               </p>
//             </div>
//           </div>

//           <div class="row g-4">
//             <div class="col-lg-12">
//               <div class="card">
//                 <div class="card-body col-lg-8">
//                   <h3 class="text-green">Throws trackers off your tracks</h3>
//                   <p class="detail">
//                     Did you know that some emails are tracking when and where
//                     you open them? We think that's an invasion of privacy, so we
//                     built Spy Scanner into Big Mail. It automatically detects
//                     and blocks trackers.
//                   </p>
//                 </div>
//                 <img
//                   class="figure-general"
//                   src="assets/images/heros/trackers.jpg"
//                   alt="Trackers"
//                 />
//               </div>
//             </div>

//             <div class="col-lg-7 d-flex">
//               <div class="card">
//                 <div class="card-body">
//                   <h3 class="text-green">
//                     A business model aligned with your interests.
//                     <br />
//                     It makes cents.
//                   </h3>
//                   <p class="detail">
//                     Can a business model really be a feature? We think so. We
//                     get our money from you: not from advertisers or analytic
//                     companies. Whilst some other apps harvest and sell data from
//                     your emails, we don’t and never will. And that’s a promise
//                     you can take to the bank.
//                   </p>
//                   <div class="d-flex flex-grow-1">
//                     <img
//                       class="figure-general align-self-center"
//                       src="assets/images/heros/businessmodel.png"
//                       alt="Avatars"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-lg-5 d-flex">
//               <div class="card bg-green">
//                 <div class="card-body d-flex flex-column">
//                   <h3 class="">Private by design</h3>
//                   <div class="d-flex flex-grow-1 align-items-center">
//                     <p class="detail lg p-4">
//                       Emails are downloaded directly from your mail provider to
//                       your device. No third party servers.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-lg-7">
//               <div class="card">
//                 <div class="card-body">
//                   <h3 class="text-green">Big Mail. Small app.</h3>
//                   <p class="detail">
//                     Big Mail’s designed to work locally on your device without
//                     taking up lots of space. In fact, for most inboxes, Big Mail
//                     uses up to 10x less space than the default Mail app on
//                     macOS.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="container py-5">
//         <div class="row py-5">
//           <div class="col-lg-8 offset-lg-2 px-4 text-center">
//             <h2>Try it for free</h2>
//             <p class="lead">
//               Big Mail works with most modern mail providers. Download the app
//               and try it for free for 7 days.
//             </p>
//             <a href="/download" class="btn btn-lg btn-primary">
//               Upgrade my Inbox &rarr;
//             </a>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
