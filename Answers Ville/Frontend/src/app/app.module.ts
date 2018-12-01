import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BadgesAndPointsComponent} from './views/client-views/badges-and-points/badges-and-points.component';
import {TagsComponent} from './views/client-views/tags/tags.component';
import {QuestionService} from './services/question.service';
import {TagService} from './services/tag.service';
import {UserService} from './services/user.service';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {UserProfileComponent} from './views/client-views/user-profile/user-profile.component';
import {AuthService} from './services/auth.service';
import {BadgeService} from './services/badge.service';
import {AnswerService} from './services/answer.service';
import {RightBarWithoutProfileComponent} from './views/client-views/sidebars/right-bar-without-profile/right-bar-without-profile.component';
import {RightBarWithProfileComponent} from './views/client-views/sidebars/right-bar-with-profile/right-bar-with-profile.component';
import {ReportedQuestionService} from './services/reported-question.service';
import {ReportedAnswerService} from './services/reported-answer.service';
import {QuestionAttachmentService} from './services/question-attachment.service';
import {AnswerAttachmentService} from './services/answer-attachment.service';
import {FileService} from './services/file.service';
import {TagDetailService} from './services/tag-detail.service';
import {QuestionVotesService} from './services/question-votes.service';
import {AnswerVoteService} from './services/answer-vote.service';
import {VisitUserProfileComponent} from './views/client-views/visit-user-profile/visit-user-profile.component';
import {AdminMainComponent} from './views/admin-views/admin-main/admin-main.component';
import {AdminManageBadgesComponent} from './views/admin-views/admin-manage-badges/admin-manage-badges.component';
import {AdminDashboardComponent} from './views/admin-views/admin-dashboard/admin-dashboard.component';
import {AdminManageAdminsComponent} from './views/admin-views/admin-manage-admins/admin-manage-admins.component';
import {AdminManageTagsComponent} from './views/admin-views/admin-manage-tags/admin-manage-tags.component';
import {AdminReportedQuestionsComponent} from './views/admin-views/admin-reported-questions/admin-reported-questions.component';
import {AdminReportedAnswersComponent} from './views/admin-views/admin-reported-answers/admin-reported-answers.component';
import {AdminSettingsComponent} from './views/admin-views/admin-settings/admin-settings.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MainComponent} from './views/client-views/main/main.component';
import {LandingPageQuestionsComponent} from './views/client-views/landing-page-questions/landing-page-questions.component';
import {PostQuestionComponent} from './views/client-views/post-question/post-question.component';
import {EditProfileComponent} from './views/client-views/edit-profile/edit-profile.component';
import {QuestionComponent} from './views/client-views/question/question.component';
import {RegisterUserComponent} from './views/client-views/register-user/register-user.component';
import {RecentQuestionsComponent} from './views/client-views/recent-questions/recent-questions.component';
import {MostlyViewedQuestionsComponent} from './views/client-views/mostly-viewed-questions/mostly-viewed-questions.component';
import {MostlyVotedQuestionsComponent} from './views/client-views/mostly-voted-questions/mostly-voted-questions.component';
import {AdminService} from './services/admin.service';
import {SuiModule} from 'ng2-semantic-ui';
import {ReviewReportedQuestionService} from './services/review-reported-question.service';
import {ReviewReportedAnswerService} from './services/review-reported-answer.service';
import {UsersComponent} from './views/client-views/users/users.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminAuthGuard} from './guards/admin-auth.guard';
import {AdminManageAdminsCandeactivateGuard} from './guards/admin-manage-admins-candeactivate.guard';
import {AdminManageBadgesCandeactivateGuard} from './guards/admin-manage-badges-candeactivate.guard';
import {AdminManageTagsCandeactivateGuard} from './guards/admin-manage-tags-candeactivate.guard';
import {EditProfileCandeactivateGuard} from './guards/edit-profile-candeactivate.guard';
import {UserProfileCandeactivateGuard} from './guards/user-profile-candeactivate.guard';
import {PostQuestionCandeactivateGuard} from './guards/post-question-candeactivate.guard';
import {PostAnswerCandeactivateGuard} from './guards/post-answer-candeactivate.guard';
import {RegisterAsAdminComponent} from './views/client-views/register-as-admin/register-as-admin.component';
import {RegisterAsAdminCandeactivateGuard} from './guards/register-as-admin-candeactivate.guard';
import { PublicChatComponent } from './views/client-views/public-chat/public-chat.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BadgesAndPointsComponent,
    TagsComponent,
    LandingPageQuestionsComponent,
    PostQuestionComponent,
    EditProfileComponent,
    UserProfileComponent,
    QuestionComponent,
    RightBarWithoutProfileComponent,
    RightBarWithProfileComponent,
    RegisterUserComponent,
    RecentQuestionsComponent,
    MostlyViewedQuestionsComponent,
    MostlyVotedQuestionsComponent,
    VisitUserProfileComponent,
    AdminMainComponent,
    AdminManageBadgesComponent,
    AdminDashboardComponent,
    AdminManageAdminsComponent,
    AdminManageTagsComponent,
    AdminReportedQuestionsComponent,
    AdminReportedAnswersComponent,
    AdminSettingsComponent,
    UsersComponent,
    RegisterAsAdminComponent,
    PublicChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule,
    SuiModule
  ],
  providers: [
    AuthService,
    QuestionService,
    TagService,
    UserService,
    BadgeService,
    AnswerService,
    FileService,
    ReportedQuestionService,
    ReportedAnswerService,
    QuestionAttachmentService,
    AnswerAttachmentService,
    TagDetailService,
    QuestionVotesService,
    AnswerVoteService,
    AdminService,
    ReviewReportedQuestionService,
    ReviewReportedAnswerService,
    AuthGuard,
    EditProfileCandeactivateGuard,
    UserProfileCandeactivateGuard,
    PostQuestionCandeactivateGuard,
    PostAnswerCandeactivateGuard,
    RegisterAsAdminCandeactivateGuard,
    AdminAuthGuard,
    AdminManageAdminsCandeactivateGuard,
    AdminManageBadgesCandeactivateGuard,
    AdminManageTagsCandeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
