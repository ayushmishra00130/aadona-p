import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const SupportTools = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
           <div className="bg-green-400/10 pt-12 pb-12 shadow-inner mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-green-900 sm:text-6xl">
              Support Tools
            </h1>
            <p className="mt-4 text-xl text-green-600">
              Access our comprehensive support tools and resources
            </p>
        </div>
    </div>
      {/* Main content - add top padding so fixed navbar doesn't overlap */}
      <main className="grow pt-28 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          {/* <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Support Tools
            </h1>
            <p className="text-gray-600">
              Access our comprehensive support tools and resources
            </p>
          </div> */}


          {/* Commitment Section */}
          <section className="bg-green-50 py-10 px-6 rounded-2xl shadow-sm text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
              Need Help with Your Product? We're Here to Assist You.
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
              With a commitment to providing ease of work, we always strive to make things simpler for our partners and customers.
            </p>
          </section>

          {/* Why This Page Exists Section */}
          <section className="max-w-3xl mx-auto mb-12">
            <h3 className="text-xl font-semibold text-green-800 mb-6 text-center">
              Why Does This Page Exist?
            </h3>
            
            <ul className="space-y-3 text-gray-700">
              {[
                "Because we care about you.",
                "Because we want to save your time.",
                "Because we want to bring the best and most popular tools for you, so that you don’t have to search for them.",
                "Because we know how important your customers are to you.",
                "Because we understand that engineer cost and time matter to you.",
                "Because many times, even customers can use these tools themselves to troubleshoot their networks."
              ].map((reason, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✔️</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Note Section */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-12">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Note:</strong> Below are all free tools and the best as per our experience, many times our team and engineers have used them, this is the reason we are recommending them here for your comfort, you have to use them on your responsibility, AADONA do not provide training or support on these tools, for any support or training required you may contact these vendors directly. We do not have any official tie-ups with any of these vendors directly or indirectly hence there is no commercial angle involved.
            </p>
          </div>

          {/* Device Login and Firmware Upgrade Tools Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Device Login and Firmware Upgrade Tools
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Use below free third party tools to troubleshoot your network
            </p>

            {/* Tools List */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Putty
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bitvise.com/ssh-client-download" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    SSH Client
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bitvise.com/ssh-server-download" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    SSH Server
                  </a>
                </li>
                <li>
                  <a 
                    href="https://pjo2.github.io/tftpd64/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    TFTP
                  </a>
                </li>
              </ul>

              {/* Tools Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> The above are third-party free to download tools, we do not take any responsibility for their accuracy, we have provided you these links just for ease of use, kindly use these at your own responsibility, even after these tools generate a report please take confirmation from our technical team on the suggestions.
                </p>
              </div>
            </div>
          </section>

          {/* Wireless Network Scanning Tools Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Wireless Network Scanning Tools
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Use below free third party tools to troubleshoot your network.
            </p>

            {/* Tools List */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.metageek.com/downloads/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    InSSIDer
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.netspotapp.com/download-win.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    NetSpot
                  </a>
                </li>
                <li>
                  <a 
                    href="https://play.google.com/store/apps/details?id=abdelrahman.wifianalyzerpro&pcampaignid=web_share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    WiFi Analyzer (Android)
                  </a>
                </li>
              </ul>

              {/* Tools Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> The above are third-party free to download tools, we do not take any responsibility for their accuracy, we have provided you these links just for ease of use, kindly use these at your own responsibility, even after these tools generate a report please take confirmation from our technical team on the suggestions.
                </p>
              </div>
            </div>
          </section>

          {/* Network Scanning Tools Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Network Scanning Tools
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Use the below free third-party tools to troubleshoot your network.
            </p>

            {/* Tools List */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.fing.com/desktop/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Fing
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.paessler.com/download/trial?download=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    PRTG
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.zabbix.com/download" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Zabbix
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.advanced-ip-scanner.com/download/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Advance IP
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.netstumbler.com/downloads/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    NetStumbler
                  </a>
                </li>
              </ul>

              {/* Tools Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> The above are third-party free to download tools, we do not take any responsibility for their accuracy, we have provided you these links just for ease of use, kindly use these at your responsibility, even after these tools generate reports please take confirmation from our technical team on the suggestions.
                </p>
              </div>
            </div>
          </section>

          {/* Network Security Scanning Tools Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Network Security Scanning Tools
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Use below free third party tools to troubleshoot your network.
            </p>

            {/* Tools List */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://nmap.org/download.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    NMAP
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.kali.org/get-kali/#kali-platforms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    KALI
                  </a>
                </li>
              </ul>

              {/* Tools Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> Above are third party free to download tools, we do not take any responsibility for its accuracy, we have provided you these links just for ease of use, kindly use these at your own responsibility, even after these tools generates report please take confirmation from our technical team on the suggestions.
                </p>
              </div>
            </div>
          </section>

          {/* Network Storage Calculator Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Network Storage Calculator
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Use below link to calculate your RAID storage capacity.
            </p>

            {/* Tools List */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.truenas.com/docs/references/zfscapacitycalculator/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Storage Calculator
                  </a>
                </li>
              </ul>

              {/* Calculator Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  This Storage Capacity Estimator tool is provided for illustrative purposes only. Total Storage Capacity is calculated based on different parameters, RAID levels and many other configurations. Any reliance on this tool and its output is at the third party’s own risk. As used for storage capacity, one gigabyte (GB) = one billion bytes, and one terabyte (TB) = one trillion bytes. Total accessible capacity on storage devices may vary depending on the operating environment.                </p>
              </div>
            </div>
          </section>

          {/* Surveillance Storage Calculator Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Surveillance Storage Calculator
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Use the blow link to calculate the total storage you need for your surveillance deployment.
            </p>

            {/* Tools List */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.seagate.com/in/en/video-storage-calculator/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-green-600 hover:text-green-900 hover:underline hover:underline-offset-4 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Surveillance Storage Calculator
                  </a>
                </li>
              </ul>

              {/* Calculator Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> This Surveillance Storage Capacity Estimator tool is provided for illustrative purposes only. Total Storage Capacity is calculated based on parameters selected in the tool, typical compression ratios determined solely by Western Digital for MJPEG, H.264, H.265, and H.265+ video formats in conjunction with video quality and scene activity, and color depth based on 30 bits for 4K resolution and higher and 16 bits for all other resolutions. Storage capacity needs may vary depending on the actual number of cameras connected, days of storage required, video format, compression ratio, camera resolution, frames per second, color depth, system capabilities, components, hardware, configurations, settings, and software, and other factors. Any reliance on this tool and its output is at the third party’s own risk. As used for storage capacity, one gigabyte (GB) = one billion bytes, and one terabyte (TB) = one trillion bytes. Total accessible capacity on storage devices may vary depending on the operating environment.                </p>
              </div>
            </div>
          </section>
          
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SupportTools