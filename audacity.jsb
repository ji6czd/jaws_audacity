JFW Script File                                                          ð  h     announceon         Settings    %          Audacity.jsi      inireadinteger     	           focusintrackpanel        focusinmainwindow   #          getfocus      getwindowname    gbNpl  
  
     	      ô    sayselectionposition             dialogactive    " X      menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey               noproject           saynoproject       	           focusinmainwindow           typecurrentscriptkey            pause           dialogactive              pause                 getfocus      getrealwindow   %     finddescendantwindow    '      AnnounceMessage   announceon        %    getpositionfield    '  %           To use this feature you must enable the selection toolbar          say               %  %    sayformattedmessage            %  %    sayformattedmessage                       markermovement           userbufferisactive    # `      focusintrackpanel   
  # |      isstopped   
          noproject           saynoproject       	           typecurrentscriptkey           AnnounceMessage   announceon          &   %    sayformattedmessage              <$  %   
   >   
  	  formatstringwithembeddedfunctions            ð     mousemovement           focusinmainwindow   # P      ispccursor  
  # p      noproject     
          typecurrentscriptkey              <$  %   
   >   
  	  formatstringwithembeddedfunctions            d    announcekeymessage          noproject     # \      userbufferisactive    
  #       focusinmainwindow   
         AnnounceMessage   announceon         Message %          sayusingvoice              typecurrentscriptkey               saycurrentscriptkeylabel            typecurrentscriptkey             ¸     saynotstopped       AnnounceMessage   announceon              Cannot perform this operation unless stopped.    not stopped.      sayformattedmessage          p     saynoproject             There is no project open.    No project    sayformattedmessage       Ä    noproject        userbufferisactive    # T      focusinmainwindow   
             getfocus      getrealwindow   '      %         gbNpl    findwindow  '        savecursor          invisiblecursor       %     movetowindow            pause                 getcurrentobject    '       restorecursor      %      accchildcount         
             	                  	      ¸    autostartevent  $  app_firsttime             &  app_firsttime             Wellcome to Audacity. Press %Keyfor(AudacityScriptkeyHelp) to display the list of JAWS hot keys for Audacity.     sayformattedmessage           Audacity.jsi         	  findjawspersonalizedsettingsfile      fileexists            adddefaultconfig              Settings     EnterPause        Audacity.jsi      inireadinteger  &  gfenterpause           Settings     JAWSGuideLink    http://vip.chowo.co.uk/wp-content/uploads/jaws/Audacity-2.0.4-Guide.html     Audacity.jsi      inireadstring     stringtrimtrailingblanks    &  gsjawsguidelink       °     saynonhighlightedtext       $  ghslideredit    # \ %   $  ghslideredit    
  
        %    ,     say          %   %    saynonhighlightedtext         L    handlecustomwindows      getfocus    '        dialogactive    #     %     getwindowsubtypecode      '   
  
  # Ð       %     getpriorwindow    getwindowsubtypecode         
  
        %     getpriorwindow  &  ghslideredit       $  ghslideredit      getpriorwindow  '     %      %    getwindowname                                        saycontrolex               	      $  ghnull  &  ghslideredit            focusinmainwindow             dialogactive    # \        getfocus      getwindowname        
  
          +     getjcfoption    '       +          setjcfoption            getobjectname   '       +   %    setjcfoption               getfocus    %                                       saycontrolex               	           iswarningdialog # Ä    2,0,3     checkaudacityversion      
             getfocus      saywindowtypeandtext               	           handlecustomwindows    	         %     getparent   '     %     getwindowname    gbNpl  
        %    getparent   '     $  ghaudacitylastarea  '  %  %  
     %  &  ghaudacitylastarea     %     getwindowname    gbNpl  
         Track panel        say         handlecustomwindows    	            %    getfirstchild     getwindowname    Ið    
         Selection bar          say           Toolbars           say                  gettoolbar    istoolbar           gettoolbar  '  %  $  ghaudacitylasttoolbar   
     %  &  ghaudacitylasttoolbar       AnnounceToolbars      announceon           %    getwindowname          say                  handlecustomwindows    	           sayfocusedobject         focusintrackpanel           sayobjectactiveitem            sayfocusedobject             Ü     istoolbar         %     getparent   '  %        
     %   '        %    getwindowname    ¹ï   
  # °    %    getwindowhierarchyx      
  
             	               	      D     gettoolbar          getfocus      getparent      	      ì     focusinmainwindow        getfocus    '      %     getwindowname    gbNpl  
  " À          %     getparent     getparent     getwindowname    ¹ï   
  
             	               	          getpositionfield          %           getwindowtext   '     %    stringstripallblanks    '     %   ,     stringcontains      000,00  '          '     %   days      stringcontains      00   days    
  '     %   00h00m00    
  '        %  %         stringtrimcommon          %   .     stringcontains  '  %        
 
       %     %    stringlength    %  
    stringright '        %   0          stringreplacechars    stringtrimleadingblanks '        %              substring    123456789     stringcontainschars         %    stringlength       %    stringlength    
  '  %       
      0   %  
  '  %       
  '           %       %       
    substring    00   0     stringreplacesubstrings '  %     %  %       
  %  
     %    stringlength    %  
    substring   
  '           %       %       
    substring    00   0     stringreplacesubstrings '  %     %  %     %    stringlength    %  
       
    substring   
  '        %     	      8    $sayselectionstart       noproject           saynoproject       	           dialogactive    "       menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey       	                 getfocus      getrealwindow     
    finddescendantwindow    '        issamescript          %     setfocus       	            %     getpositionfield    '  %           To use this feature you must enable the selection toolbar          say                %  %    saymessage               $sayselectionend         noproject           saynoproject       	           dialogactive    "       menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey       	                 getfocus      getrealwindow     
    finddescendantwindow    '        issamescript          %     setfocus       	                 getfocus      getrealwindow     
    finddescendantwindow    '       savecursor          invisiblecursor       %    movetowindow            pause           controlischecked    '       restorecursor      %          %    getnextwindow   '        %    getwindowname   '     %     getpositionfield    '  %           To use this feature you must enable the selection toolbar          say                %  %  
  %    saymessage              ,    $sayactivecursor         focusinmainwindow     " X      issamescript    
  " x      ispccursor    
  "       userbufferisactive  
  " ¸      noproject   
          $sayactivecursor    	                 getfocus      getrealwindow     
    finddescendantwindow    '         %     getnextwindow     getnextwindow   '      %     getpositionfield    '  %           To use this feature you must enable the selection toolbar          say                %  %    saymessage           H     $scriptfilename     Audacity      scriptandappnames             $audacityscriptkeyhelp       userbufferisactive          userbufferdeactivate               issamescript      # ¤      focusinmainwindow   
         JAWS keystrokes for script version %1, for Audacity 2.0.0 or later:  2.0 9/15/13 19:56UTC      formatstring    '        (   %     sayformattedmessage         (   To say the selection start position, press %keyfor (SaySelectionStart).
To say the selection end position or length, press %keyfor(SaySelectionEnd).
To move focus to these controls, press the key twice quickly.
To say the Audio Position value, press %keyfor(SayActiveCursor).
To say the active cursor while the PC cursor is active, press %keyfor(SayActiveCursor) twice quickly.
To increase gain of focus track, press %keyfor (MouseUp).
To reduce gain of focus track, press %keyfor (MouseDown).
To adjust pan left, press %keyfor (MouseLeft).
To adjust pan right, press %keyfor (MouseRight).
The last 4 keys replace the default JAWS mouse movement scripts while focus is in the main window.  If you want to activate the original functionality while in the main window, turn on the JAWS cursor.
To toggle speech on or off, press %keyfor(MuteSynthesizer).
To toggle alert messages on or off, press %keyfor (AnnounceOnOff)).  This duplicates the Announce Audacity messages option in Adjust JAWS options.
See the what's new.txt for more info.
In a toolbar to move to the next toolbar press %KeyFor (NextDocumentWindow)
In a toolbar to move to the previous toolbar press %KeyFor (PreviousDocumentWindow)
To speak the program's state (play/pause/record/stop) press %KeyFor(SayAudacityState)
To reset all script options to default values, press %keyfor (ResetConfig)
To switch between the two lists in the Edit Chains dialog, press %keyfor (SwitchChainsList).
To get help with Audacity hot keys, press %keyfor(AudacityKeysHelp).
To get the default Windows hot key help, press %keyfor(AudacityKeysHelp) twice quickly.

If the "ENTER pauses during play/record" option is on, pressing %KeyFor(ENTER) while playing or recording sends the Pause key.  Use %KeyFor(CtrlEnter) to execute ENTER in this situation.

In some common VST plugins, such as L1V:
To set focus to the preset control, press %keyfor (VSTPreset).
To load an existing preset, press  %keyfor (VSTLoadPreset).
To save the current settings as a preset, press  %keyfor (VSTSavePreset).

To change settings for the Audacity script press %KeyFor (AdjustJawsOptions).     sayformattedmessage         addhotkeylinks             dialogactive    # X
           getfocus      getrealwindow     ø*    finddescendantwindow    
          (   11 To set focus to the preset option, press %keyfor (VSTPreset).
To load an existing preset, press  %keyfor (VSTLoadPreset).
To save the current settings as a preset, press  %keyfor (VSTSavePreset).   sayformattedmessage         addhotkeylinks     	           $hotkeyhelp            showjawsguide           

 loading Audacity JAWS Guide web page     JAWS Guide    saymessage        $  gsjawsguidelink   run       4    $audacitykeyshelp        issamescript      # X      focusinmainwindow   
          userbufferisactive          userbufferdeactivate               userbufferclear           Default keystrokes for Audacity v2.0.4 (from %1, by %2).  Access the guide at    Audacity 2.0.4 Guide     David Bailes      formatstring      userbufferaddtext         $  gsjawsguidelink  ShowJawsGuide()  link to JAWS guide    userbufferaddtext         General
Command Keystrokes 
Open audio file Ctrl + O 
Import audio file Ctrl + Shift + I 
New project Ctrl + N 
Save project Ctrl + S 
Preferences dialog Ctrl + P 
Cycle forward through Toolbars, Track table, and Selection bar Ctrl + F6 
Cycle backward through Toolbars, Track table, and Selection bar Ctrl + Shift + F6 
Zoom normal Ctrl + 2 
Zoom in Ctrl + 1 
Zoom out Ctrl + 3 

Playback
Command Keystroke 
Start/Stop Spacebar 
Start/Stop and move cursor Shift + A 
Pause/resume P 
Seek backward short period during playback Left Arrow 
Seek forward short period during playback Right Arrow 
Seek backward long period during playback Shift + Left Arrow 
Seek forward long period during playback Shift + Right Arrow 
Play cut/delete preview C 
Play looped Shift + Spacebar 
Output Device dialog Shift + O 

Track table
Command Keystroke 
Move to previous track Up Arrow 
Move to next track Down Arrow 
Toggle selection of focused track Enter 
Select all the tracks (and all the audio) Ctrl + A 
Deselect all the tracks (and any time-range) Ctrl + Shift + A 
Open menu of focused track Application Key or Shift + M 
Close (Delete) focused track Shift + C 

Audio track
Command Keystroke 
Change gain of focused track Shift + G 
Change pan of focused track Shift + P 
Mute/Unmute focused track Shift + U 
Mute all tracks Ctrl + U 
Unmute all tracks Ctrl + Shift + U 
Solo/Unsolo focused track Shift + S 

Moving the cursor
Command Keystroke 
Move to start of tracks (time zero) Home 
Move to end of all audio End 
Move to start of audio in selected tracks J 
Move to end of audio in selected tracks K 
New cursor position at playback position [ 
Stop playback and move cursor Shift + A 
Move backward short period Comma 
Move forward short period Period 
Move backward long period Shift + Comma 
Move forward long period Shift + Period 
Cursor left by a small amount Left Arrow 
Cursor right by a small amount Right Arrow 

Selecting a time range
Command Keystroke 
Select time range which includes all the audio, and select all tracks Ctrl + A 
Selection start at start of tracks (time zero) Shift + Home 
Selection end at end of all the audio Shift + End 
Selection end at playback position ] 
Selection start at start of audio in selected tracks Shift + J 
Selection end at end of audio in selected tracks Shift + K 
To move the end of the selection to the right by a small amount Shift + Right Arrow 
To move the end of the selection to the left by a small amount Ctrl + Shift + Left Arrow 
To move the start of the selection to the right by a small amount Ctrl + Shift + Right Arrow 
To move the start of the selection to the left by a small amount Shift + Left Arrow 

Editing
Command Keystroke 
Undo Ctrl + Z 
Redo Ctrl + Y 
Delete selected audio Delete 
Cut selected audio Ctrl + X 
Copy selected audio Ctrl + C 
Paste Ctrl + V 
Replace selected audio with silence Ctrl + L 
Close (Delete) focused track Shift + C 

Recording
Command Keystroke 
Record R 
Append Record Shift + R 
Pause/resume P 
Stop Spacebar 
Audio Host dialog Shift + H 
Input Device dialog Shift + I 
Number of channels dialog Shift + N     userbufferaddtext          
     userbufferaddtext         0 ãã®ã¡ãã»ã¼ã¸ãéããã«ã¯ãEscã­ã¼ãæ¼ãã¾ãã     userbufferaddtext           userbufferactivate          jawstopoffile           sayline            $windowkeyshelp       D     $mouseup     MouseUp '      %     mousemovement         H     $mousedown   MouseDown   '      %     mousemovement         H     $mouseleft   MouseLeft   '      %     mousemovement         H     $mouseright  MouseRight  '      %     mousemovement         X     $selectionstart      
   Selection Start   sayselectionposition          X     $selectionend        
   Selection end     sayselectionposition          `    $finishmarkerright       ispccursor    " T      userbufferisactive  
          $selectnextcharacter    	           isstopped             typecurrentscriptkey       	          %1 %2    end  right     formatstring    '    SelectNextCharacter '     %  %     markermovement         AnnounceMessage   announceon  #      noproject     
  # °     focusintrackpanel   
          pause                 getfocus      getrealwindow     
    finddescendantwindow    '        %    getpositionfield           say              $finishmarkerleft        ispccursor    " T      userbufferisactive  
  " t      isstopped     
          $selectpriorword    	          %1 %2    end  left      formatstring    '    SelectPriorWord '     %  %     markermovement         AnnounceMessage   announceon  # \     noproject     
          pause                 getfocus      getrealwindow     
    finddescendantwindow    '        %    getpositionfield           say              $startmarkerright        ispccursor    " T      userbufferisactive  
  " t      isstopped     
          $selectnextword 	          %1 %2    start    right     formatstring    '    SelectNextWord  '     %  %     markermovement         AnnounceMessage   announceon  # \     noproject     
          pause                 getfocus      getrealwindow     
    finddescendantwindow    '        %    getpositionfield           say          h    $startmarkerleft         ispccursor    " T      userbufferisactive  
          $selectpriorcharacter   	           isstopped             typecurrentscriptkey       	          %1 %2    start    left      formatstring    '    SelectPriorCharacter    '     %  %     markermovement         AnnounceMessage   announceon  #      noproject     
  # ¸     focusintrackpanel   
          pause                 getfocus      getrealwindow     
    finddescendantwindow    '        %    getpositionfield           say          4    $jawshome        noproject   # H      focusintrackpanel   
  # p      userbufferisactive    
          saynoproject       	           ispccursor  # Ð      focusintrackpanel   
  # ð      noproject     
  #      userbufferisactive    
  # H    AnnounceMessage   announceon  
          isstopped             saynotstopped      	           jawshome                   Move to %1 of %2     start    track     formatstring      sayformattedmessage            $jawshome         0    $jawsend         noproject   # H      focusintrackpanel   
  # p      userbufferisactive    
          saynoproject       	           ispccursor  # Ð      focusintrackpanel   
  # ð      noproject     
  #      userbufferisactive    
  # H    AnnounceMessage   announceon  
          isstopped             saynotstopped      	           jawsend                Move to %1 of %2     end  all audio     formatstring      sayformattedmessage            $jawsend          l    $movetostartofselectedtracks         dialogactive    " X      menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey               istrackselected           saynotrackselected     	             Move to %1 of %2     start    selected tracks   formatstring      announcekeymessage           d    $movetoendofselectedtracks       dialogactive    " T      menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey               istrackselected           saynotrackselected     	             Move to %1 of %2     end  selected tracks   formatstring      announcekeymessage           H    $selecttobeginning       dialogactive    " L      menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey               istrackselected           saynotrackselected     	             Selected to %1   start     formatstring      announcekeymessage           @    $selecttoend         dialogactive    " H      menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey               istrackselected           saynotrackselected     	             Selected to %1   end   formatstring      announcekeymessage           ¤    $selectfromstartofline       noproject           saynoproject       	           ispccursor  #       focusintrackpanel   
  # °      noproject     
  # Ø      userbufferisactive    
          selectfromstartofline          AnnounceMessage   announceon               Select from start of file.    sayformattedmessage               $selectfromstartofline            $selecttoendofline       noproject           saynoproject       	           ispccursor  #       focusintrackpanel   
  # ´      userbufferisactive    
  # Ô      noproject     
          selecttoendofline          AnnounceMessage   announceon               Select to end of file.    sayformattedmessage               $selecttoendofline            $deleteselectedaudio         noproject           saynoproject       	           dialogactive    "       menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey       	           istrackselected           saynotrackselected     	           focusinmainwindow           isstopped             saynotstopped      	           typecurrentscriptkey           AnnounceMessage   announceon              Delete selected audio    Delete    sayformattedmessage               saycurrentscriptkeylabel            typecurrentscriptkey             p     $jawsdelete      focusinmainwindow           $deleteselectedaudio            $jawsdelete            $jawsbackspace       focusintrackpanel   # P      noproject     
          $deleteselectedaudio            $jawsbackspace        ô    $saypriorcharacter       userbufferisactive    # h     AnnounceMessage   announceon  
  #       ispccursor  
  # ¨      focusintrackpanel   
  # Ä      isstopped   
          noproject           saynoproject       	           typecurrentscriptkey            pause                 getfocus      getrealwindow     
    finddescendantwindow    '         %     getpositionfield           say            $saypriorcharacter        ô    $saynextcharacter        userbufferisactive    # h     AnnounceMessage   announceon  
  #       ispccursor  
  # ¨      focusintrackpanel   
  # Ä      isstopped   
          noproject           saynoproject       	           typecurrentscriptkey            pause                 getfocus      getrealwindow     
    finddescendantwindow    '         %     getpositionfield           say            $saynextcharacter         d    $copy        istrackselected   # P      userbufferisactive    
  # t      dialogactive      
  #       menusactive   
          saynotrackselected     	           focusinmainwindow   #      userbufferisactive    
          noproject           saynoproject       	           isstopped             saynotstopped      	           typecurrentscriptkey           AnnounceMessage   announceon         Message 		 Copy selected audio to clipboard           sayusingvoice                 $copyselectedtexttoclipboard              $cuttoclipboard      istrackselected   # T      dialogactive      
          saynotrackselected     	           focusinmainwindow   # Ä      userbufferisactive    
          noproject           saynoproject       	           isstopped             saynotstopped      	           typecurrentscriptkey           AnnounceMessage   announceon         Message  cut selected audio to clipboard        sayusingvoice                 $cuttoclipboard            $deselectall         noproject           saynoproject       	          deselect all      announcekeymessage           l    $closefocustrack         noproject           saynoproject       	           userbufferisactive    #       focusintrackpanel   
          isstopped             saynotstopped      	          close focused track   announcekeymessage             saycurrentscriptkeylabel            typecurrentscriptkey             ¼     $announceonoff      UOAnnounceMessages:Announce Audacity messages    :          stringsegment              uoannouncemessages  
  '      %          say       Ø    $nextdocumentwindow         gettoolbar    istoolbar             $nextdocumentwindow         gettoolbar  '      %     getnextwindow   '  %          %     getfirstwindow  '        %    getfirstchild   '  %  #       %    getwindowclass   wxWindowClass     stringcompare         
  "    %    getwindowsubtypecode         
  
  
        %    getnextwindow   '   ð       %    setfocus             4    $previousdocumentwindow         gettoolbar    istoolbar             $previousdocumentwindow         gettoolbar  '      %     getpriorwindow  '  %          %     getlastwindow   '           %    getfirstchild     getlastwindow   '     %    setfocus             ¨    getaudacitystate               getfocus      getappmainwindow      getfirstchild   '      %     getnextwindow   '      %         gX|[g    findwindow  '   %                 	            %     getfirstchild     getnextwindow   '      %     getobjstate '     %     getnextwindow   '      %     getobjstate '     %     getnextwindow   '      %     getobjstate '           %     getnextwindow     getnextwindow     getnextwindow   '      %     getobjstate '  %        
          '     %        
          '          '     %        
     %       
  '     %     	      X    $sayaudacitystate        getaudacitystate    '        dialogactive    " l      menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey       	      %         
         Cannot find transport toolbar.  The transport toolbar must be enabled for this script to work.         say    	           noproject           saynoproject       	      %        
      play    '     %        
      record  '      stop    '     %        
     %       
   pause   
  '        %         say           $enter       focusinmainwindow   # H      isstopped     
  # d $  gfenterpause    
         p     typekey            userbufferisactive          $enter          saycurrentscriptkeylabel            typecurrentscriptkey                H    $ctrlenter       focusinmainwindow   # L      isstopped     
  # h $  gfenterpause    
         Enter     typekey        Enter     %     say            userbufferisactive          $controlenter           saycurrentscriptkeylabel            typecurrentscriptkey                °    getobjstate       %     getwindowname   '       +     getjcfoption    '       +          setjcfoption          %   %       %  %    getobjectinfobyname '  %          %     üÿÿÿ      %    getobjectfromevent  '  %     %           accstate    '  %       
           '           '          ÿÿÿÿ'             +   %    setjcfoption       %     	      D     isstopped        getaudacitystate         
     	      ¸     $adjustjawsverbosity     UOAnnounceMessages:Announce Audacity messages    |   
  

 UOAnnounceToolbars:Announce toolbars    
  '      %     jawsverbositycore             $adjustjawsoptions       inhjdialog             0^^ ç¾å¨éããã¦ãã%product%ãã¤ã¢ã­ã°ããã¯ã¹ãããã¾ãã ä¸åº¦ã«éããã¨ãã§ãã%product%ãã¤ã¢ã­ã°ããã¯ã¹ã¯1ã¤ã ãã§ãã

æå®ããããã¤ã¢ã­ã°ããã¯ã¹ãè¡¨ç¤ºããã«ã¯ãEscã­ã¼ãæ¼ãã¦ç¾å¨ã®ãã¤ã¢ã­ã°ãéãã¦ããã
ç®çã®ãã¤ã¢ã­ã°ããã¯ã¹ãã¢ã¯ãã£ãã«ãã¾ãã  0@@ éããã¦ãã%product%ãã¤ã¢ã­ã°ãããã¾ããä¸åº¦ã«éããã¨ãã§ãã%product%ãã¤ã¢ã­ã°ããã¯ã¹ã¯1ã¤ã ãã§ãã
æ°ãããã¤ã¢ã­ã°ãéãåã«ãç¾å¨ã®ãã¤ã¢ã­ã°ãéããå¿è¦ãããã¾ãã    sayformattedmessage    	       UOAnnounceMessages:Announce Audacity messages    |   
  

 UOAnnounceToolbars:Announce toolbars    
   |   
   UOEnterPause:ENTER pauses during play/record    
  '        getjfwversion      » 
 	       %     optionstreecore          %     jawsverbositycore                  nodehlp       %        getactiveconfiguration    stringcontains      Audacity-specific options      	         %     nodehlp    	         x    uoannouncemessages         Settings     AnnounceMessage        Audacity.jsi      inireadinteger  '  %        %       
           '     %       
  '         Settings     AnnounceMessage %   Audacity.jsi      iniwriteinteger       %        
     0 ãªã     	      %       
     0 ãªã³     	         d     uoannouncemessageshlp    If on, speaks messages for Audacity audio operations.      	          uoannouncetoolbars         Settings     Announcetoolbars           Audacity.jsi      inireadinteger  '  %        %       
           '     %       
  '         Settings     Announcetoolbars    %   Audacity.jsi      iniwriteinteger       %        
     0 ãªã     	      %       
     0 ãªã³     	         |     uoannouncetoolbarshlp    If on, speaks the toolbar name when focus moves from one toolbar to another.       	      ¤    uoenterpause           Settings     EnterPause        Audacity.jsi      inireadinteger  '  %        %       
           '        &  gfenterpause       %       
  '       &  gfenterpause           Settings     EnterPause  %   Audacity.jsi      iniwriteinteger       %        
     0 ãªã     	      %       
     0 ãªã³     	               uoenterpausehlp  If on, ENTER executes Pause during playback and record, and Control+ENTER sends ENTER.  Otherwise, sends ENTER to Audacity.    	      t    adddefaultconfig        Settings     AnnounceMessage       Audacity.jsi            iniwriteinteger        Settings     EnterPause        Audacity.jsi            iniwriteinteger         &  gfenterpause        Settings     AnnounceToolbars          Audacity.jsi            iniwriteinteger        Settings     JAWSGuideLink    http://vip.chowo.co.uk/wp-content/uploads/jaws/Audacity-2.0.4-Guide.html     Audacity.jsi           iniwritestring      http://vip.chowo.co.uk/wp-content/uploads/jaws/Audacity-2.0.4-Guide.html    &  gsjawsguidelink        $resetconfig           Audacity.jsi         	  findjawspersonalizedsettingsfile      fileexists         Settings     announce          Audacity.jsi      inireadstring   '   %          settings     announce     Audacity.jsi            iniremovekey                  adddefaultconfig          

 Script options reset to default values         say           $sayappversion       $sayappversion      Jaws script version %1, for Audacity 2.0.0 or later.     2.0 9/15/13 19:56UTC      formatstring    '      %           say         issamescript          %     userbufferaddtext                 $selectall       $selectall       noproject           saynoproject       	           focusinmainwindow   #       noproject     
  # Ì     AnnounceMessage   announceon  
         Message  All tracks selected        sayusingvoice            à    processvst                getfocus      getrealwindow   %     finddescendantwindow    '       dialogactive    #  %  
        %    getwindowsubtypecode         
          isspeechoff '       speechoff         %    setfocus            pause           enterkey       %            speechon                %    setfocus                  saycurrentscriptkeylabel            typecurrentscriptkey             4     $vstpreset       ø*    processvst        8     $vstloadpreset       ù*    processvst        8     $vstsavepreset       ú*    processvst        (    $sayjump         typecurrentscriptkey            userbufferisactive    # x      focusintrackpanel   
  #       noproject   
          saynoproject       	           userbufferisactive    #       focusintrackpanel   
  # 0    AnnounceMessage   announceon  
  # L     isstopped   
          pause                 getfocus      getrealwindow     
    finddescendantwindow    '         %     getpositionfield           say            saycurrentscriptkeylabel             \    istrackselected      noproject           saynoproject       	                       getfocus      getappmainwindow      getfirstchild     getlastwindow     getfirstchild   '        +     getjcfoption    '       +          setjcfoption          %     üÿÿÿ      %    getobjectfromevent  '  %      accchildcount   '       '  %  %  
     %    %    accstate    '  %       
          +   %    setjcfoption               	      %       
  '           +   %    setjcfoption                	         Ð     saynotrackselected       noproject     # P      menusactive   
         To use this feature you must select current track first. Press enter to select this.           say          H    iswarningdialog         getfocus      getwindowname   '        dialogactive    # ,%    Make a copy of the files before editing (safer) 
  " ä %    Read the files directly from the original (faster)  
  
  " (%    Don't warn again and always use my choice above 
  
  
             	              $sayline         iswarningdialog # D      ispccursor  
  # l      userbufferisactive    
  # ¤     2,0,3     checkaudacityversion      
             getfocus      saywindowtypeandtext               $sayline          p    $switchchainslist           getfocus      getrealwindow   '        dialogactive    #     %     getwindowname    Edit Chains 
  
             getfocus      getcontrolid    '  %    Y  
                getfocus      getrealwindow     '    finddescendantwindow    '   Chain commands  '        %     Y    finddescendantwindow    '   Chains  '        %    setfocus           AnnounceMessage   announceon         Message %         sayusingvoice                 saycurrentscriptkeylabel            typecurrentscriptkey                 $pastefromclipboard      dialogactive    " L      menusactive 
          $pastefromclipboard 	           noproject           saynoproject       	           isstopped             saynotstopped      	           $pastefromclipboard       ü    $showcopyright       (   ðð JAWS script for Audacity multitrack sound editor V2.0 or later (http://audacity.sourceforge.net).

    Copyright (C) 2012, 2013  Gary Campbell and Dang Manh Cuong.  All rights reserved.

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
    
    See the file copying.txt for details.    saymessage        À    checkaudacityversion               getappfilepath   FileVersion   getversioninfostring    '     %   ,     stringsegmentcount  '     %    ,     stringsegmentcount  '  %  %  
     %  '          '       '  %  # %  %  
  
           %   ,   %    stringsegment     stringtoint       %    ,   %    stringsegment     stringtoint 
 	 '  %       
  '   ø    %     	      ¸    $test    testing 2,0,3, got         2,0,3     checkaudacityversion      inttostring 
   , should get True
  
  '   %    testing 2,0,4, got  
         2,0,4     checkaudacityversion      inttostring 
   , should get True
  
  '   %    testing 2,0,5, got  
         2,0,5     checkaudacityversion      inttostring 
   , should get False
 
  '        (   %     saymessage        