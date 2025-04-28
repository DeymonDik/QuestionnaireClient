import { Component, OnInit } from '@angular/core';
import { HttpClientService } from "../services/http-client.service";
import { Question } from "../models/question";
import { Variant } from "../models/variant";
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  public form: FormGroup;

  public variants = new FormArray([
    new FormGroup({
      variant: new FormControl(''),
      isTrue: new FormControl(false),
    })
  ]);

  public options = [
    {
      text: 'Чекбокс',
      value: 'checkbox',
    },
    {
      text: 'Радио-кнопка',
      value: 'radio',
    },
    {
      text: 'Текст',
      value: 'textarea',
    },
  ]

  public sendingQuestion: boolean = false;

  constructor(
    private httpClientService: HttpClientService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {
    const state = this.router.getCurrentNavigation()?.extras?.state as any;
    const question = state?.question as Question | undefined;

    if (question) {
      this.variants = this.fb.array([
        ...question.variants.map(value => {
          return new FormGroup({
              variant: new FormControl(value.text),
              isTrue: new FormControl(value.isTrue)
            }
          )
        })
      ]);
    }

    this.form = this.fb.group({
      question: new FormControl(""),
      type: new FormControl(""),
      variants: this.variants,
    })

    if (question) {
      this.form.patchValue({
        question: question.question,
        type: question.type,
      });
    }
  }

  public ngOnInit() {
  }

  public add() {
    this.variants.push(
      new FormGroup({
        variant: new FormControl(''),
        isTrue: new FormControl(false),
      })
    )
  }

  public delete(index: number) {
    this.variants.removeAt(index);
  }

  public createQuestion() {
    const question: Question = {
      question: this.form.controls['question'].value,
      createTime: new Date(),
      variants: [
        ...this.variants.value.map(variant => {
          return {
            isTrue: variant.isTrue,
            text: variant.variant,
          }
        }) as Variant[]
      ],
      type: this.form.controls['type'].value,
      group: '',
    }

    this.form.reset();

    this.variants = new FormArray([
      new FormGroup({
        variant: new FormControl(''),
        isTrue: new FormControl(false),
      })
    ]);

    this.sendingQuestion = true;

    setTimeout(() => {
      this.sendingQuestion = false;
    }, 3000)

    this.httpClientService.postData(question).subscribe();
  }
}
