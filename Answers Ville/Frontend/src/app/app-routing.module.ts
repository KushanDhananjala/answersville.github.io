import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BadgesAndPointsComponent} from './views/client-views/badges-and-points/badges-and-points.component';
import {TagsComponent} from './views/client-views/tags/tags.component';
import {VisitUserProfileComponent} from './views/client-views/visit-user-profile/visit-user-profile.component';
import {AdminMainComponent} from './views/admin-views/admin-main/admin-main.component';
import {AdminManageBadgesComponent} from './views/admin-views/admin-manage-badges/admin-manage-badges.component';
import {AdminDashboardComponent} from './views/admin-views/admin-dashboard/admin-dashboard.component';
import {AdminManageAdminsComponent} from './views/admin-views/admin-manage-admins/admin-manage-admins.component';
import {AdminManageTagsComponent} from './views/admin-views/admin-manage-tags/admin-manage-tags.component';
import {AdminReportedQuestionsComponent} from './views/admin-views/admin-reported-questions/admin-reported-questions.component';
import {AdminReportedAnswersComponent} from './views/admin-views/admin-reported-answers/admin-reported-answers.component';
import {AdminSettingsComponent} from './views/admin-views/admin-settings/admin-settings.component';
import {MainComponent} from './views/client-views/main/main.component';
import {LandingPageQuestionsComponent} from './views/client-views/landing-page-questions/landing-page-questions.component';
import {RecentQuestionsComponent} from './views/client-views/recent-questions/recent-questions.component';
import {MostlyViewedQuestionsComponent} from './views/client-views/mostly-viewed-questions/mostly-viewed-questions.component';
import {MostlyVotedQuestionsComponent} from './views/client-views/mostly-voted-questions/mostly-voted-questions.component';
import {QuestionComponent} from './views/client-views/question/question.component';
import {RegisterUserComponent} from './views/client-views/register-user/register-user.component';
import {PostQuestionComponent} from './views/client-views/post-question/post-question.component';
import {UserProfileComponent} from './views/client-views/user-profile/user-profile.component';
import {EditProfileComponent} from './views/client-views/edit-profile/edit-profile.component';
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
import {PublicChatComponent} from './views/client-views/public-chat/public-chat.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {path: 'home', component: LandingPageQuestionsComponent},
      {path: 'recent-questions', component: RecentQuestionsComponent},
      {path: 'mostly-viewed-questions', component: MostlyViewedQuestionsComponent},
      {path: 'mostly-voted-questions', component: MostlyVotedQuestionsComponent},
      {
        path: 'question',
        component: QuestionComponent,
        canDeactivate: [PostAnswerCandeactivateGuard]
      },
      {path: 'register', component: RegisterUserComponent},
      {
        path: 'post-question',
        component: PostQuestionComponent,
        canActivate: [AuthGuard],
        canDeactivate: [PostQuestionCandeactivateGuard]
      },
      {path: 'badges-and-points', component: BadgesAndPointsComponent},
      {path: 'tags', component: TagsComponent},
      {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
        // canDeactivate: [UserProfileCandeactivateGuard]
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
        canActivate: [AuthGuard],
        canDeactivate: [EditProfileCandeactivateGuard]
      },
      {path: 'visit-user-profile', component: VisitUserProfileComponent},
      {path: 'users', component: UsersComponent},
      {
        path: 'register-as-admin',
        component: RegisterAsAdminComponent,
        canActivate: [AuthGuard],
        canDeactivate: [RegisterAsAdminCandeactivateGuard]
      },
      {
        path: 'public-chat',
        component: PublicChatComponent
      },
    ]
  },
  {
    path: 'admin-main',
    component: AdminMainComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {path: 'admin-dashboard', component: AdminDashboardComponent},
      {
        path: 'admin-admins',
        component: AdminManageAdminsComponent,
        canDeactivate: [AdminManageAdminsCandeactivateGuard]
      },
      {
        path: 'admin-badges',
        component: AdminManageBadgesComponent,
        canDeactivate: [AdminManageBadgesCandeactivateGuard]
      },
      {
        path: 'admin-tags',
        component: AdminManageTagsComponent,
        canDeactivate: [AdminManageTagsCandeactivateGuard]
      },
      {path: 'admin-reported-questions', component: AdminReportedQuestionsComponent},
      {path: 'admin-reported-answers', component: AdminReportedAnswersComponent},
      {path: 'admin-settings', component: AdminSettingsComponent},
    ]
  },
  {path: '', pathMatch: 'full', redirectTo: '/main/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
